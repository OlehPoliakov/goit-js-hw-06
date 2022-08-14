// 1. Напиши скрипт для создания галереи изображений по массиву данных. 
//    В HTML есть список ul.gallery.
// 2. Используй массив объектов images для создания элементов < img > вложенных в < li >.
// 3. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
// 4. Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// 5. Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulgallery = document.querySelector('.gallery')
ulgallery.style.display = "flex";
ulgallery.style.flexWrap = 'wrap';
ulgallery.style.gap = '10px';
ulgallery.style.listStyleType = "none";

const itemImg = images.map(element => {

  const img = document.createElement('img')
  const li = document.createElement('li')

  li.classList.add('gallery_img')
  img.src = element.url;
  img.alt = element.alt;
  img.width = 320;
  img.height = 320;

  li.append(img);

  return li
});
ulgallery.append(...itemImg)

console.log(ulgallery)

