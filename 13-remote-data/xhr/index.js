const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
const request = new XMLHttpRequest();
request.open('GET', url);
request.send();

request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    // successful request logs the returned JSON data
    const data = JSON.parse(request.response);
    console.log(data);
  } else {
    // server error
    // example: INTERNAL SERVER ERROR: 500 error
    console.log(`${request.statusText}: ${request.status} error`);
  }
};

// request error
request.onerror = () => console.log(request.statusText);
