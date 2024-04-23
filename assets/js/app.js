// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// Function to add animation class
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      // Optional: Remove the class if you want the animation to trigger every time the element comes into view
      entry.target.classList.remove('visible');
    }
  });
}, {
  rootMargin: '0px',
  threshold: 0.1 // Adjust this value based on when you want the animation to start
});

// Select all elements that should be animated
const elementsToAnimate = document.querySelectorAll('.animate');
elementsToAnimate.forEach((el) => {
  observer.observe(el);
});
