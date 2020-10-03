const actions = document.querySelectorAll('#counter button');
const decrement = actions[0];
const increment = actions[1];
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
