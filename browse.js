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
