
import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';


const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};


refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

insertFormValue();


const formValue = {
  email: refs.input.value,
  message: refs.textarea.value,
};


function onInput(evt) {
  formValue[evt.target.name] = evt.target.value;
  const formValueJSON = JSON.stringify(formValue);
  localStorage.setItem(STORAGE_KEY, formValueJSON);
}


function insertFormValue() {
  const value = localStorage.getItem(STORAGE_KEY);
  if (value) {
    const formValueJSON = JSON.parse(value);
    const { email = '', message = '' } = formValueJSON;
    refs.input.value = email;
    refs.textarea.value = message;
  }
}


function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
