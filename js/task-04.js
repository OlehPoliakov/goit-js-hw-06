// 1. Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// 2. Добавь слушатели кликов на кнопки, внутри
// которых увеличивай или уменьшай значение счтетчика.
// 3. Обновляй интерфейс новым значением переменной counterValue.
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },

    decrement() {
        this.counterValue -= 1;
    },
};

const BtnDecrement = document.querySelector('[data-action="decrement"]');
BtnDecrement.style.borderRadius = '50%';
BtnDecrement.style.backgroundColor = 'tomato';

const BtnIncrement = document.querySelector('[data-action="increment"]');
BtnIncrement.style.borderRadius = '50%';
BtnIncrement.style.backgroundColor = 'yellowgreen';

const value = document.querySelector('#value');

BtnDecrement.addEventListener('click', () => {
    counter.decrement();
    value.textContent = counter.counterValue;
});

BtnIncrement.addEventListener('click', () => {
    counter.increment();
    value.textContent = counter.counterValue;
});
