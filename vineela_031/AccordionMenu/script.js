function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    const isVisible = content.style.display === 'block';

    // Close all other accordion items
    document.querySelectorAll('.accordion-content').forEach(item => item.style.display = 'none');
    document.querySelectorAll('.arrow').forEach(item => item.classList.remove('rotate'));

    // Toggle current accordion item
    if (!isVisible) {
        content.style.display = 'block';
        arrow.classList.add('rotate');
    }
}
