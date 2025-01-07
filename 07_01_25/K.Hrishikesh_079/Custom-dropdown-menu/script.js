document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const selectedValueElement = document.querySelector('.selected-value');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const value = item.getAttribute('data-value');
            dropdownToggle.textContent = value;
            selectedValueElement.textContent = `Selected: ${value}`;
            dropdownMenu.classList.remove('show');
        });
    });

    window.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
