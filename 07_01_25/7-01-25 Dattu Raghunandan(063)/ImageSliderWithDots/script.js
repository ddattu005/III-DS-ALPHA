// Select slides and dots
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let index = 0;

// Function to show a specific slide
function showSlide(n) {
  index = n;
  const offset = -300 * n; // Calculate the offset for the slide
  slides.style.transform = `translateX(${offset}px)`; // Slide transition

  // Update dots
  dots.forEach(dot => dot.classList.remove('active'));
  dots[n].classList.add('active');
}

// Add click event to each dot
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Automatic slide transition every 3 seconds
setInterval(() => {
  index = (index + 1) % dots.length; // Loop through slides
  showSlide(index);
}, 3000);
