const form = document.querySelector('form');

const email = document.querySelector('#user-email');
const emailError = document.querySelector('#user-email + span.error');

const country = document.querySelector('#user-country');
const countryError = document.querySelector('#user-country + span.error');

const zipcode = document.querySelector('#user-zipcode');
const password = document.querySelector('#password');
const confirmationPw = document.querySelector('#password-confirmation');


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
    showError(email, emailError, 'an email address' );
    event.preventDefault();
  } else if (!country.validity.valid) {
    showError();
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
  console.log(country.validity.valid)
  console.log(country.validity)
  if (country.validity.valid){
    countryError.textContent = "";
    emailError.className = 'error';
  } else {
    showError(country, countryError, 'a coutry name')
  }
})