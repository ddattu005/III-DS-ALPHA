const form = document.getElementById('validationForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Real-time validation
function validateEmail() {
    const email = emailInput.value.trim();
    const errorMessage = emailInput.nextElementSibling;

    if (!email) {
        errorMessage.textContent = 'Email is required.';
        emailInput.classList.add('error');
        emailInput.classList.remove('success');
        errorMessage.style.display = 'block';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorMessage.textContent = 'Enter a valid email address.';
        emailInput.classList.add('error');
        emailInput.classList.remove('success');
        errorMessage.style.display = 'block';
    } else {
        errorMessage.textContent = '';
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        errorMessage.style.display = 'none';
    }
}

function validatePassword() {
    const password = passwordInput.value.trim();
    const errorMessage = passwordInput.nextElementSibling;

    if (!password) {
        errorMessage.textContent = 'Password is required.';
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        errorMessage.style.display = 'block';
    } else if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters.';
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        errorMessage.style.display = 'block';
    } else {
        errorMessage.textContent = '';
        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        errorMessage.style.display = 'none';
    }
}

// Attach event listeners for real-time validation
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// On form submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission for demonstration purposes
    validateEmail();
    validatePassword();

    if (!emailInput.classList.contains('error') && !passwordInput.classList.contains('error')) {
        // Redirect to the success page
        window.location.href = 'success.html';
    }
});
