let currentStep = 1;
const steps = document.querySelectorAll('.step');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateProgress() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    progressBar.style.width = ((currentStep - 1) / (steps.length - 1)) * 100 + '%';

    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === steps.length;
}

function changeStep(direction) {
    currentStep += direction;
    updateProgress();
}

updateProgress();