/* eslint-disable no-undef */
function inputValidator(id, value) {
  // check email validity
  if (id === 'email') {
    return validator.isEmail(value);
  }

  // check US postal code validity
  if (id === 'postal') {
    return validator.isPostalCode(value, 'US');
  }

  return false;
}

const inputs = document.querySelectorAll('#example input');

inputs.forEach(input => {
  // fire an event each time an input value changes
  input.addEventListener('input', () => {
    // pass the input value to the validation function
    const valid = inputValidator(input.id, input.value);
    // if not valid set the aria-invalid attribute to true
    if (!valid && input.value.length > 0) {
      input.setAttribute('aria-invalid', 'true');
    }
  });
});
