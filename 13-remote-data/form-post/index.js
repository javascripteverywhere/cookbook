const myForm = document.getElementById('my-form');
const url = 'http://localhost:8080/';

myForm.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(myForm);
  formData.append('user', true);
  const response = await fetch(url, {
    method: 'post',
    body: formData
  });

  const result = await response.text();
  console.log(result);
});
