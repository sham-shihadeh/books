

//code for menu to show when clicked - when using restrictive sizing

//get necessary DOM elements
const menuBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector("#mobile__menu");
const closeBtn = document.querySelector(".close");
const navLinks = document.querySelectorAll(".nav__links li");


//functoin to toggle the mobile menu's visibility
function toggleMenu() {
  mobileMenu.classList.toggle("overlay--active");
}

//function to close the mobile menu
function closeMenu() {
  mobileMenu.classList.remove("overlay--active");
}

//add the event listeners for menu button and close button clicks
menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", closeMenu);


//add event listeners for each navigation link to close the mobile menu when clicked
navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", closeMenu);
});

//add event listener for window resize, and close the mobile menu if the window size is greater than 450px
window.addEventListener("resize", function() {
  if (window.innerWidth > 450) {
    mobileMenu.classList.remove("overlay--active");
  }
});




