// Get the header container element
const header = document.querySelector(".lancer-app-header-container");

// Listen for the scroll event
window.onscroll = () => {
  // Check if vertical scroll position is 100 pixels or more, and apply or remove the class
  window.scrollY >= 100
    ? header.classList.add("header-floating")
    : header.classList.remove("header-floating");
};

// Also check on page load in case the user reloads the page while scrolled down
window.onload = () => {
  if (window.scrollY >= 100) {
    header.classList.add("header-floating");
  }
};
