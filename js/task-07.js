// 1. Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// 2. В результате при перетаскивании ползунка будет меняться размер текста.

const inputRange = document.querySelector('#font-size-control');
const txt = document.querySelector('#text');

inputRange.addEventListener('input', event => {
    txt.style.fontSize = `${event.currentTarget.value}px`;
});
