// Get form elements
const form = document.getElementById('validation-form');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Reusable function to validate inputs
function validateInput(input, regex, errorMsg) {
  const error = input.nextElementSibling; // Get the associated <small> element
  if (!regex.test(input.value)) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    error.textContent = errorMsg;
    error.style.display = 'block';
    return false;
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.style.display = 'none';
    return true;
  }
}

// Event listeners for dynamic validation
email.addEventListener('input', () => {
  validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format');
});

password.addEventListener('input', () => {
  validateInput(password, /.{6,}/, 'Password must be at least 6 characters');
});

// Form submission event
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isEmailValid = validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format');
  const isPasswordValid = validateInput(password, /.{6,}/, 'Password must be at least 6 characters');

  if (isEmailValid && isPasswordValid) {
    alert('Form submitted successfully!');
  } else {
    alert('Please fix the errors in the form before submitting.');
  }
});
