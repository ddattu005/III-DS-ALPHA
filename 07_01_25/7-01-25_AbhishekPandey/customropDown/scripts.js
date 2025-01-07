document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const options = document.querySelectorAll(".dropdown-option");
  
    // Toggle dropdown menu visibility
    toggleButton.addEventListener("click", () => {
      dropdownMenu.classList.toggle("active");
      toggleButton.classList.toggle("active");
    });
  
    // Handle option selection
    options.forEach(option => {
      option.addEventListener("click", () => {
        const selectedValue = option.getAttribute("data-value");
        toggleButton.textContent = selectedValue;
        dropdownMenu.classList.remove("active");
        toggleButton.classList.remove("active");
      });
    });
  
    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
      if (!toggleButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("active");
        toggleButton.classList.remove("active");
      }
    });
  });
  