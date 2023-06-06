const trendingButton = document.querySelector("#trending-button");
const highlyRatedButton = document.querySelector("#highly-rated-button");
const top10Button = document.querySelector("#top-10-button");
const bookerButton = document.querySelector("#booker-button");
const internationalButton = document.querySelector("#international-button");
const arabicButton = document.querySelector("#arabic-button");
trendingButton.addEventListener("click", function() {
  window.location.href = "#trending";
});

highlyRatedButton.addEventListener("click", function() {
  window.location.href = "#HighlyRated";
});

top10Button.addEventListener("click", function() {
  window.location.href = "#Official30";
});

bookerButton.addEventListener("click", function() {
  window.location.href = "#booker";
});

internationalButton.addEventListener("click", function() {
  window.location.href = "#international";
});

arabicButton.addEventListener("click", function() {
  window.location.href = "#arabic";
});

const topBtn = document.querySelector("#topbtn");

  topBtn.addEventListener("click", function() {
    window.scrollTo(0, 0);
  });


  

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




