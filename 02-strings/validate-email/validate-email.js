const emailValid = "abeLincoln@gmail.com";
const emailInvalid = "abeLincoln@gmail .com";
const regex = /\S+@\S+\.\S+/;

if (regex.test(emailValid)) {
  console.log(`${emailValid} is valid`);
}
else {
  console.log(`${emailValid} is not valid`);
}

if (regex.test(emailInvalid)) {
  console.log(`${emailInvalid} is valid`);
}
else {
  console.log(`${emailInvalid} is not valid`);
}