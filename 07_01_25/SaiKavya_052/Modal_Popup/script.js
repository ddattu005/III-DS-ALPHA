const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

// Open modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Show the modal
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
