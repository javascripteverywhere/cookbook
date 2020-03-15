const data = [
  { name: 'Joe Brown', age: 53, experience: 5 },
  { name: 'Cindy Johnson', age: 44, experience: 5 },
  { name: 'Some Reader', age: 30, experience: 3 }
];

// delete the 'Cookbook' database, so the example can be run more than once
const delReq = indexedDB.deleteDatabase('Cookbook');
delReq.onerror = event => {
  console.log('delete error', event);
};

// open the 'Cookbook' database with a version of '1'
// or create it if it does not exist
const request = indexedDB.open('Cookbook', 1);

// upgradeneeded event is fired when a db is opened
// with a version number higher than the currently stored version (in this case none)
request.onupgradeneeded = event => {
  const db = event.target.result;
  const { transaction } = event.target;

  // create a new object store named 'reader' in the database
  const objectStore = db.createObjectStore('reader', {
    keyPath: 'id',
    autoIncrement: true
  });

  // create new keys in the object store
  objectStore.createIndex('experience', 'experience', { unique: false });
  objectStore.createIndex('name', 'name', { unique: true });

  // when all data loaded, log to the console
  transaction.oncomplete = () => {
    console.log('data finished');
  };

  const readerObjectStore = transaction.objectStore('reader');

  // add each value from the data object to the indexedDB database
  data.forEach(value => {
    const req = readerObjectStore.add(value);
    // console log a message when successfully added
    req.onsuccess = () => {
      console.log('data added');
    };
  });

  // if the request throws an error, log it to the console
  request.onerror = () => {
    console.log(event.target.errorCode);
  };

  // when the data store is successfully created, log to the console
  request.onsuccess = () => {
    console.log('datastore created');
  };

  // on page click, get a random value from the database and log it to the console
  document.onclick = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    const dataRequest = db
      .transaction(['reader'])
      .objectStore('reader')
      .get(randomNum);
    dataRequest.onsuccess = () => {
      console.log(`Name : ${dataRequest.result.name}`);
    };
  };
};
