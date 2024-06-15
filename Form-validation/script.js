const form = document.querySelector('form');
const emailField = document.querySelector('.email-field');
const email = document.querySelector('.email');
const passwordField = document.querySelector('.password-field');
const password = document.querySelector('.password');
const confirmPasswordField = document.querySelector('.confirm-password-field');
const cPassword = document.querySelector('.cPassword');

  // Email validation
  function ValidationEmail() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value.match(emailRegex)) {
        return emailField.classList.add('invalid');
    }
    emailField.classList.remove('invalid');
}

 // Password visibility toggle
 const eyeIcon = document.querySelectorAll('.show-eye');
 eyeIcon.forEach((eyeIcon) => {
     eyeIcon.addEventListener('click', () => {
         const pInput = eyeIcon.parentElement.querySelector('input');
         if (pInput.value !== '' && pInput.type === 'password') {
             eyeIcon.classList.replace('ri-eye-off-line', 'ri-eye-line');
             pInput.type = 'text';
         } else {
             eyeIcon.classList.replace('ri-eye-line', 'ri-eye-off-line');
             pInput.type = 'password';
         }
     });
 });

 // Password validation
 function passValidation() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!(password.value.match(passwordRegex))) {
        return passwordField.classList.add('invalid');
    }
    passwordField.classList.remove('invalid');
}

// Confirm Password validation
function matchingPassword() {
    if (password.value !== cPassword.value) {
        return confirmPasswordField.classList.add('invalid');
    }
    confirmPasswordField.classList.remove('invalid');
}

// Form submission event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    ValidationEmail();
    passValidation();
    matchingPassword();

    //function calling when, key up:
    email.addEventListener('keyup', ValidationEmail);
    password.addEventListener('keyup', passValidation);
    cPassword.addEventListener('keyup', matchingPassword);
});