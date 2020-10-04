const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onValidationInput);

function onValidationInput(event) {
  const number = event.currentTarget.value.length;

  if (inputLength === number) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
  // if ((inputLength = event.currentTarget.value.length)) {
  //   inputEl.style.borderColor = '#4caf50';
  // } else {
  //   inputEl.style.borderColor = '#f44336';
  // }
}
