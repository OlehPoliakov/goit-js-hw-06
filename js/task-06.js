// 1. Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//    проверяет его содержимое на правильное количество введённых символов.
// 2. Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 3. Если введено подходящее количество символов,
//    border инпута становится зелёным, если неправильное - красным.

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', event => {
    if (event.target.value.length == validationInput.getAttribute('data-length')) {
        validationInput.classList.add('valid');

        if (validationInput.classList.contains('invalid')) {
            validationInput.classList.remove('invalid');
        }
    } else {
        if (validationInput.classList.contains('valid')) {
            validationInput.classList.remove('valid');
        }
        validationInput.classList.add('invalid');
    }
});
