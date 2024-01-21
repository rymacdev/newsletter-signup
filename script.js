const signupForm = document.querySelector('form#signup-form');
const signupCard = document.querySelector('.signup.card');
const successCard = document.querySelector('.success.card');
const email = document.querySelector('#email')
const errorLabel = document.querySelector('.field-error-label')
const dismissButton = document.querySelector('#dismiss');
const submittedEmail = document.querySelector('.submitted-email')

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var errors = 0;

  if (email.value == "") {
    errorLabel.textContent = "Valid email required";
    email.classList.toggle('error');
    console.log("Error: Email is blank!");  

    errors++;

    return false;
  }
  
  if (!email.value.match(validRegex)) {
    errorLabel.textContent = "Valid email required"
    email.classList.toggle('error');
    console.log("Error: Email not valid format!");

    errors++;

    return false;
  }

  if (errors == 0) {

    // Success. Remove error style and log submission.
    email.classList.remove('error');
    console.log('Submission success!')

    submittedEmail.textContent = email.value;

    signupCard.classList.add('hidden');
    successCard.classList.remove('hidden');
  }

})

// Resets page upon dismiss
dismissButton.addEventListener('click', () => {
  location.reload(true);
})

