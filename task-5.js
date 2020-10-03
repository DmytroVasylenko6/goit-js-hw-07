const inputEl = document.querySelector('#name-input');
const name = document.querySelector('h1 > span');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value) {
    name.textContent = event.currentTarget.value;
  } else {
    name.textContent = 'незнакомец';
  }
}
