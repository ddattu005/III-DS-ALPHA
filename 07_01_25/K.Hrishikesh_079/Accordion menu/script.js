function toggleAccordion(element) {
    const header = element;
    const content = header.nextElementSibling;

    header.classList.toggle('active');
    if (header.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = 0;
    }
}
