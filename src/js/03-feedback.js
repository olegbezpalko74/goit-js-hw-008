import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';

const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle( e => {
  formData[e.target.name] = e.target.value;
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    

}), 500);

populateTextarea()


function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');

  evt.currentTarget.reset();
   localStorage.removeItem(STORAGE_KEY);
}


function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    
    refs.textarea.value = savedMessage.message || '';
    refs.input.value = savedMessage.email || '';


  }

}







