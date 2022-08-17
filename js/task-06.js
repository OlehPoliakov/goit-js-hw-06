// 1. Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//    проверяет его содержимое на правильное количество введённых символов.
// 2. Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 3. Если введено подходящее количество символов,
//    border инпута становится зелёным, если неправильное - красным.

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', event => {
    const requiredLength = validationInput.getAttribute('data-length')
    const inputValueLength = event.target.value.length

    if (requiredLength == inputValueLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');

    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});
