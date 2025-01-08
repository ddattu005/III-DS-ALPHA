function filterGallery(tag) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (tag === 'all' || item.classList.contains(tag)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}