// Get the dropdown button, dropdown content, and selected value element
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const selectedValue = document.getElementById('selectedValue');

// Function to toggle dropdown visibility
dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

// Function to update the selected value when an item is clicked
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
  item.addEventListener('click', (event) => {
    // Get the value from the clicked item
    const selectedOption = event.target.getAttribute('data-value');
    
    // Set the selected value text
    selectedValue.textContent = selectedOption;
    
    // Close the dropdown
    dropdownContent.classList.remove('show');
  });
});

// Close the dropdown if the user clicks anywhere outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-item')) {
    dropdownContent.classList.remove('show');
  }
});
