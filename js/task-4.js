const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

decrement.addEventListener('click', onDecrementButtonClick);
increment.addEventListener('click', onIncrementButtonClick);

function onIncrementButtonClick() {
  value.textContent = counterValue;
  return (counterValue += 1);
}
function onDecrementButtonClick() {
  value.textContent = counterValue;
  return (counterValue -= 1);
}
