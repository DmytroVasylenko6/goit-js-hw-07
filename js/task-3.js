const inputEl = document.querySelector('#name-input');
const value = document.querySelector('h1 > span');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value) {
    value.textContent = event.currentTarget.value;
  } else {
    value.textContent = 'Anonymous';
  }
}

