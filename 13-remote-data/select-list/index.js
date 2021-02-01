const niceThings = document.getElementById('nice-thing');
const select = document.getElementById('nicestuff');
const url = 'http://localhost:8080/select';

// perform GET request when select value changes
niceThings.addEventListener('change', async () => {
  // object containing select value
  const selection = {
    niceThing: niceThings.value
  };

  // GET request to server
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(selection)
  });

  // if fetch is successful
  if (response.ok) {
    const result = await response.json();
    // empty the select element
    select.length = 0;
    // add a default display option with text and no value
    select.options[0] = new Option('--Please choose an option--', '');
    // populate the select with the returned values
    for (let i = 0; i < result.length; i += 1) {
      select.options[select.length] = new Option(result[i], result[i]);
    }
    // display the select element
    select.style.display = 'block';
  } else {
    // if there's a problem fetching the data, display an error
    alert('Error');
  }
});
