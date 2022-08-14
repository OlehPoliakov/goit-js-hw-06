// 1. Создать отдельный элемент
// 2. Использовать метод document.createElement().
// 3. Добавить название ингредиента как его текстовое содержимое.
// 4. Добавить элементу класс item.
// 5. Вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];

const ulIngredients = document.querySelector('#ingredients')
ulIngredients.append('INGREDIENTS')

const liIngredients = ingredients.map(element => {
  const li = document.createElement('li')
  li.textContent = element
  li.classList.add('ingredients_item')
  return li
});

ulIngredients.append(...liIngredients)

console.log(ulIngredients)