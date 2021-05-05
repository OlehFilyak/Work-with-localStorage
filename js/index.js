// console.log("Все працює");

const refs ={
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
    inputName: document.querySelector('.js-feedback-form input'),
    buttonSubmit: document.querySelector('.js-feedback-form button')
}

// console.log(refs.form);
// console.log(refs.textarea);
// console.log(refs.inputName);
// console.log(refs.buttonSubmit);

refs.textarea.addEventListener('input', saveTextareaInputValueToLocalStorage);
refs.form.addEventListener('submit', onButtonSubmitForm)


populateTextarea ()


function saveTextareaInputValueToLocalStorage(e) {
    // console.log(e.target.value)
    localStorage.setItem('user-msg', e.target.value)

}

function onButtonSubmitForm (e) {
    e.preventDefault();
    localStorage.removeItem('user-msg');
    e.target.reset();
}

function populateTextarea () {
    const savedMessage = localStorage.getItem('user-msg')
    if(savedMessage) {
         refs.textarea.value = savedMessage;
    }
}