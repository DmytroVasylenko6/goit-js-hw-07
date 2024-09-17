const categoriesEl = document.querySelector('#categories');
const number = Array.from(categoriesEl.children).length;
console.log(`Number of categories: ${number}`);

const categoriesList = Array.from(document.querySelectorAll('.item'));

categoriesList.forEach(element => {
  const title = element.querySelector('h2').textContent;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Category: ${title}\nElements: ${itemsLength}`);
});
