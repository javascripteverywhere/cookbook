/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import { openDB, deleteDB } from 'https://unpkg.com/idb?module';

const data = [
  { name: 'Riley Harrison', age: 57, experience: 1 },
  { name: 'Harlow Everly', age: 29, experience: 5 },
  { name: 'Abigail McCullough', age: 38, experience: 10 }
];

(async () => {
  // for demo purposes, delete existing db on page load
  try {
    await deleteDB('CookbookIDB');
  } catch (err) {
    console.log('delete error', err);
  }

  // open the database and create the data store
  const database = await openDB('CookbookIDB', 1, {
    upgrade(db) {
      // Create a store of objects
      const store = db.createObjectStore('reader', {
        keyPath: 'id',
        autoIncrement: true
      });

      // create new keys in the object store
      store.createIndex('experience', 'experience', { unique: false });
      store.createIndex('name', 'name', { unique: true });
    }
  });

  // add all of the reader data to the store
  data.forEach(async value => {
    await database.add('reader', value);
  });
})();
