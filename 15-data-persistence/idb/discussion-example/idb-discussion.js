/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { openDB } from 'https://unpkg.com/idb?module';

(async () => {
  // open the database and create the data store
  const database = await openDB('ReaderNames', 1, {
    upgrade(db) {
      // Create a store of objects
      const store = db.createObjectStore('reader', {
        keyPath: 'id',
        autoIncrement: true
      });

      // create new keys in the object store
      store.createIndex('age', 'age', { unique: false });
      store.createIndex('name', 'name', { unique: true });
    }
  });

  async function setData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    await database.add('reader', {
      name,
      age
    });
  }

  async function getData() {
    // get the reader data from the database
    const readers = await database.getAll('reader');

    const dataDisplay = document.getElementById('data-list');

    // add the name and age of each reader in the db to the page
    readers.forEach(reader => {
      const value = `${reader.name}: ${reader.age}`;
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(value));
      dataDisplay.appendChild(li);
    });
  }

  document.getElementById('set').onclick = setData;
  document.getElementById('get').onclick = getData;
})();
