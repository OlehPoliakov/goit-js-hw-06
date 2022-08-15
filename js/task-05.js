//                      Напиши скрипт который 
// 1. при наборе текста в инпуте nput#name - input(событие input), 
//    подставляет его текущее значение в span#name - output.
// 2. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
		textOutput.textContent = 'Anonymous'
	}
});




