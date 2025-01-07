// Select the button and card elements
const toggleButton = document.getElementById('toggle-flip');
const cardContent = document.querySelector('.card-content');

// Add a click event listener to the button
toggleButton.addEventListener('click', () => {
    cardContent.classList.toggle('flipped'); // Toggle the 'flipped' class
});
