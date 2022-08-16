// // 1. Вывести в консоль количество элементов li.item.

// const numberOfCategoriesList = document.querySelectorAll('.item').length;
// console.log(`Number of categories:`, numberOfCategoriesList);

// // 2. Вывести в консоль текст заголовка элемента (тега <h2>) 
// // и количество элементов в категории(всех вложенных в него < li >).
// const categoriesList = document.querySelector('#categories');

// // Animals
// const categoriesListAnimals = categoriesList.children[0];
// const headingAnimals = categoriesListAnimals.querySelector('h2').textContent;
// console.log(`Category:`,headingAnimals)
// const numberAnimals = categoriesListAnimals.querySelectorAll('li').length;
// console.log(`Elements:`, numberAnimals);

// // Products
// const categoriesListProducts = categoriesList.children[1];
// const headingProducts = categoriesListProducts.querySelector('h2').textContent;
// console.log(`Category:`,headingProducts)
// const numberProducts = categoriesListProducts.querySelectorAll('li').length;
// console.log(`Elements:`, numberProducts);

// // Technologies 
// const categoriesListTechnologies = categoriesList.children[2];
// const headingTechnologies = categoriesListTechnologies.querySelector('h2').textContent;
// console.log(`Category:`,headingTechnologies)
// const numberTechnologies = categoriesListTechnologies.querySelectorAll('li').length;
// console.log(`Elements:`, numberTechnologies);

// 2 Вариант

const categoriesLi = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesLi.length}`);

categoriesLi.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});

