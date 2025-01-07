document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');
    const passwordError = document.getElementById('passwordError');
    const passwordSuccess = document.getElementById('passwordSuccess');

    emailInput.addEventListener('input', function() {
        validateEmail();
    });

    passwordInput.addEventListener('input', function() {
        validatePassword();
    });

    function validateEmail() {
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            emailInput.classList.add('error');
            emailInput.classList.remove('success');
            emailError.textContent = 'Please enter a valid email address.';
            emailSuccess.textContent = '';
        } else {
            emailInput.classList.remove('error');
            emailInput.classList.add('success');
            emailError.textContent = '';
            emailSuccess.textContent = 'Email address is valid.';
        }
    }

    function validatePassword() {
        const passwordValue = passwordInput.value;

        if (passwordValue.length < 6) {
            passwordInput.classList.add('error');
            passwordInput.classList.remove('success');
            passwordError.textContent = 'Password must be at least 6 characters long.';
            passwordSuccess.textContent = '';
        } else {
            passwordInput.classList.remove('error');
            passwordInput.classList.add('success');
            passwordError.textContent = '';
            passwordSuccess.textContent = 'Password is valid.';
        }
    }
});
