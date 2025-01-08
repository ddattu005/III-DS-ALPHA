function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

function selectOption(element) {
    const selectedValue = document.getElementById('selected-value');
    selectedValue.textContent = `Selected: ${element.textContent}`;
    toggleDropdown();
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdownMenu = document.getElementById('dropdown-menu');
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    }
}