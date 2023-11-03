const form = document.querySelector('form');

const email = document.querySelector('#user-email');
const emailError = document.querySelector('#user-email + span.error');

const country = document.querySelector('#user-country');
const countryError = document.querySelector('#user-country + span.error');

const zipcode = document.querySelector('#user-zipcode');
const zipcodeError = document.querySelector('#user-zipcode + span.error');

const password = document.querySelector('#password');
const passwordError = document.querySelector('#password + span.error');

const confirmationPw = document.querySelector('#password-confirmation');
const confirmationPwError = document.querySelector('#password-confirmation + span.error');


function showError(formElementInput, formElementError, requestedInfo) {
  if (formElementInput.validity.valueMissing) {
    formElementError.textContent = `You need to enter ${requestedInfo}.`;
  } else if (formElementInput.validity.typeMismatch) {
    formElementError.textContent = `Entered value needs to be ${requestedInfo}.`;
  } else if (formElementInput.validity.tooShort) {
    formElementError.textContent = `Content should be at least ${formElementInput.minLength} characters; you entered ${formElementInput.value.length}.`;
  } else if(formElementInput.validity.patternMismatch) {
    formElementError.textContent = 'The content should start with uppercase like the example.';
  }

  formElementError.className = "error active";
}


form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError(email, emailError, 'an email address');
    event.preventDefault();
  } else if (!country.validity.valid) {
    showError(country, countryError, 'a country name');
    event.preventDefault();
  }
});

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; 
    emailError.className = "error";
  } else {
    showError(email, emailError, 'an email address');
  }
});

country.addEventListener('input', (event)=> {
  if (country.validity.valid){
    countryError.textContent = "";
    countryError.className = 'error';
  } else {
    showError(country, countryError, 'a coutry name')
  }
})

zipcode.addEventListener('input', ()=>{
  if (zipcode.validity.valid){
    zipcodeError.textContent = "";
    zipcodeError.className = 'error';
  } else {
    showError(zipcode, zipcodeError, 'a zip code');
  }
})
