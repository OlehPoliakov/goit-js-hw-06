// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector('.change-color')
const body = document.querySelector('body')
const colorValue = document.querySelector('.color')



changeColorButton.addEventListener('click', () => { 
  let colorButton = getRandomHexColor();
  changeColorButton.style.backgroundColor = colorButton;
});

changeColorButton.addEventListener('click', () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
});

