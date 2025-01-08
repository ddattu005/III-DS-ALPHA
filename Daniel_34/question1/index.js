// Get the card and button
const card = document.getElementById('card');
const toggleButton = document.getElementById('toggle-btn');

// Add event listener to the button for toggling the flip
toggleButton.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

// Optionally, you can add a CSS class for a flipped card using JavaScript