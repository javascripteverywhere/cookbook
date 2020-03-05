function generateAlert(message) {
  console.log(message);
}

function validateField() {
  // check for number
  if (typeof this.value !== 'number') {
    this.setAttribute('aria-invalid', 'true');
    generateAlert(
      'You entered an invalid value. Only numeric values such as 105 or 3.54 are allowed'
    );
  }
}

function checkMandatory() {
  // check for data
  if (this.value.length === 0) {
    this.setAttribute('aria-invalid', 'true');
    generateAlert('A value is required in this field');
  }
}

document.getElementById('number').onchange = validateField;
document.getElementById('required-field').onblur = checkMandatory;
