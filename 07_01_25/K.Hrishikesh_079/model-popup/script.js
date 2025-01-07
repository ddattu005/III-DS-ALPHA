document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');

    openModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('show');
    });

    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('show');
        }
    });
});
