// Hamburger menu selections
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", function() {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});
// Hamburger menu functionality

// Theme switcher selection
const theme = document.querySelector("#checkbox");

theme.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});
// Close menu on nav menu clicks

// scroll to top functionality

// Theme switcher functionality
