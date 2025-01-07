// Get elements
const progressBar = document.getElementById('progress');
const formSteps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('button[id^="nextBtn"]');
const prevBtns = document.querySelectorAll('button[id^="prevBtn"]');
const submitBtn = document.getElementById('submitBtn');

let currentStep = 0;

// Show the first step
showStep(currentStep);

// Show the progress bar based on the current step
function updateProgressBar() {
  const progress = (currentStep / (formSteps.length - 1)) * 100;
  progressBar.style.width = `${progress}%`;
}

// Display the active step
function showStep(step) {
  formSteps.forEach((stepDiv, index) => {
    stepDiv.classList.remove('active');
    if (index === step) {
      stepDiv.classList.add('active');
    }
  });
  updateProgressBar();
  toggleButtons();
}

// Toggle the Next and Previous buttons
function toggleButtons() {
  if (currentStep === 0) {
    nextBtns[0].disabled = false;
    prevBtns[0].disabled = true;
  } else if (currentStep === formSteps.length - 1) {
    nextBtns[1].disabled = true;
    submitBtn.disabled = false;
  } else {
    nextBtns[1].disabled = false;
    prevBtns[1].disabled = false;
  }
}

// Event listeners for the Next and Previous buttons
nextBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0 && validateStep1()) {
      currentStep++;
      showStep(currentStep);
    } else if (index === 1 && validateStep2()) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

prevBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    currentStep--;
    showStep(currentStep);
  });
});

// Validate each step
function validateStep1() {
  const name = document.getElementById('name').value;
  return name.trim() !== '';
}

function validateStep2() {
  const email = document.getElementById('email').value;
  return email.trim() !== '';
}

// Form submission (for demo purposes)
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  alert("Form submitted!");
});
