// Get the header container element
const header = document.querySelector(".lancer-app-header-container");

// Listen for the scroll event
window.onscroll = () => {
  // Check if vertical scroll position is 100 pixels or more, and apply or remove the class
  window.scrollY >= 100
    ? header.classList.add("header-floating")
    : header.classList.remove("header-floating");
};

// ##################
// ##################
// ##################
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
});

// Also check on page load in case the user reloads the page while scrolled down
window.onload = () => {
  if (window.scrollY >= 100) {
    header.classList.add("header-floating");
  }
};

// ######################
// ######################
// ######################
// ######################
// ######################

// In your assets/js/script.js file
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all the buttons that act as the FAQ questions
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((clickedButton) => {
    clickedButton.addEventListener("click", function () {
      // Check karein ke kya yeh button pehle se hi 'active' hai?
      const isCurrentlyActive = this.classList.contains("active");

      // Sab se pehle saare buttons se 'active' class hatao aur answers band karo
      faqQuestions.forEach((otherButton) => {
        otherButton.classList.remove("active");
        otherButton.nextElementSibling.style.maxHeight = "0";
      });

      // Agar button pehle se 'active' nahi tha (yani abhi open karna hai)
      if (!isCurrentlyActive) {
        // Sirf click kiye gaye button par 'active' class lagao
        this.classList.add("active");

        // Aur uska answer open karo
        const answerWrapper = this.nextElementSibling;
        const answerContentHeight = answerWrapper.querySelector(
          ".faq-answer-content"
        ).scrollHeight;

        answerWrapper.style.maxHeight = answerContentHeight + "px";
      }

      // Note: Agar button pehle se active tha, toh upar ke sab steps
      // usay active class remove kar ke band kar denge.
    });
  });
});
