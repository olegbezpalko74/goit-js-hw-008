import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('feedback-form input');
const textereaEl = document.querySelector('feedback-form texterea');

const USER_FORM_DATE = "feedback-form-state";




let formDataValues = {};


const onFormInput = event => {
  formDataValues[event.target.name] = event.target.value;
  localStorage.setItem(USER_FORM_DATE, JSON.stringify(formDataValues));
};

const onFormSubmit = event => {
  event.preventDefauld();
  if (inputEl.value !== '' && textereaEl.value !== '') {
    console.log(formDataValues);
    localStorage.removeItem(USER_FORM_DATE);
    event.target.reset();
    return ;
  }
  alert("All fields are required to be filled");
};

const populateFormDate = () => {
  const savedFormDate = localStorage.getItem(USER_FORM_DATE);
  if (savedFormDate) {
    formDataValues =JSON.parse(savedFormDate);
    inputEl.value = formDataValues.email || '';
    textereaEl.value = formDataValues.message || '';
  }
};


