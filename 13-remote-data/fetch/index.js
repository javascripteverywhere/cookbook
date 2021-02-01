const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

// basic example
async function fetchRequest() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

// error handling
async function fetchRequestWithError() {
  try {
    const response = await fetch(url);
    if (response.status >= 200 && response.status < 400) {
      const data = await response.json();
      console.log(data);
    } else {
      // Handle server error
      // example: INTERNAL SERVER ERROR: 500 error
      console.log(`${response.statusText}: ${response.status} error`);
    }
  } catch (error) {
    console.log(error);
  }
}

// demonstrate options
async function fetchRequestOptions() {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });
  // log response to demonstrate the full response
  console.log(response);
  const data = await response.json();
  console.log(data);
}

fetchRequest();
fetchRequestWithError();
fetchRequestOptions();
