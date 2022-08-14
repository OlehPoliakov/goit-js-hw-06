# Module 6 Критерии приема

- Создан репозиторий `goit-js-hw-06`.

- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub Pages.

- Задания выполнены строго по ТЗ (нельзя изменять исходный HTML задания).

- При посещении живой страницы задания, в консоли нету ошибок и предупреждений.

- Имена переменных и функций понятные, описательные.

- Код отформатирован `Prettier`.

# Task 1 

В HTML есть список категорий `ul#categories`.

```js
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Напиши скрипт который:

1. Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть элементов `li.item`.

2. Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в консоль текст заголовка элемента (тега `<h2>`) и количество элементов в категории (всех вложенных в него `<li>`).
В результате, в консоли будут выведены такие сообщения.

```js
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

# Task 2

В HTML есть пустой список `ul#ingredients`.

```js
<ul id="ingredients"></ul>
```

В JavaScript есть массив строк.

```js
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
```

Напиши скрипт, который для каждого элемента массива `ingredients`:

1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().

2. Добавит название ингредиента как его текстовое содержимое.

3. Добавит элементу класс `item`.

4. После чего вставит все `<li>` за одну операцию в список `ul#ingredients`.
