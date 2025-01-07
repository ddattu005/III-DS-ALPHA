const card = document.querySelector('.card');
const toggleBtn = document.querySelector('.toggle-btn');

card.addEventListener('click', () => {
    card.classList.toggle('flip');
});

toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents click from propagating to the card
    card.classList.remove('flip');
});
