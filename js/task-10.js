

const inputNum = document.querySelector('#controls>input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const divBoxes = document.querySelector('#boxes')

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
} 

let total = 30;
const createBoxes = amount => {
  const elementsToAdd = []
  
  for (let i = 0; i < amount; i += 1) {
    
    const div = document.createElement('div')
    div.style.height = `${total}px`
    div.style.width = `${total}px`
    div.style.background = getRandomHexColor()
    elementsToAdd.push(div)
    total += 10;
  }
  return elementsToAdd
};

// Добавляем div по клику btnCreate
btnCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNum.value)
  divBoxes.append(...boxesToAdd)
});

// Удаляем div по клику btnDestroy
btnDestroy.addEventListener('click', () => {
  divBoxes.innerHTML = '';
  total = 30;
});