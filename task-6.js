const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;
inputEl.style.border = '3px solid #bdbdbd';

inputEl.addEventListener('input', onValidationInput);
function onValidationInput(event) {
  if (inputLength <= event.currentTarget.value.length) {
    inputEl.style.borderColor = '#4caf50';
  } else {
    inputEl.style.borderColor = '#f44336';
  }
}
