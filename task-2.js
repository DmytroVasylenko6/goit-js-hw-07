const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const arrIngr = [];
ingredients.forEach(element => {
  const ingradient = document.createElement('li');
  ingradient.textContent = `${element}`;
  arrIngr.push(ingradient);
});
const list = document.querySelector('#ingredients');
list.append(...arrIngr);
