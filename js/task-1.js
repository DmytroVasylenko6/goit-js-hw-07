const categoriesEl = document.querySelector('#categories');
const number = Array.from(categoriesEl.children).length;
console.log(`В списке ${number} категории.`);

const categoriesList = Array.from(document.querySelectorAll('.item'));

categoriesList.forEach(element => {
  const title = element.querySelector('h2').textContent;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title}\nКоличество элементов: ${itemsLength}`);
});
