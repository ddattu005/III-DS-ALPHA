// Get elements
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.getElementById('close-btn');
const actionBtn = document.getElementById('action-btn');

// Open modal
modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal on close button click
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Optional: Add an action button inside the modal
actionBtn.addEventListener('click', () => {
  alert('Action performed!');
  modal.style.display = 'none';
});
