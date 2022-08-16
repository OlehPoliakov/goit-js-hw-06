// Напиши скрипт управления формой логина.
// 1. Обработка отправки формы form.login-form должна быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//    где имя поля будет именем свойства, а значение поля - значением свойства.
//    - Для доступа к элементам формы используй свойство elements.

const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    };

    if (mail === '' && password === '') {
        alert('Note: All fields must be completed!');
    }

    event.currentTarget.reset();

    console.log(formData);
}
