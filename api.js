document.addEventListener('DOMContentLoaded', function() {
    const API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes?q=';
  
    const searchBox = document.getElementById('search-box');
    const searchBtn = document.getElementById('search-btn');
    const resultsContainer = document.getElementById('results');
    const loadingSpinner = document.getElementById('loading-spinner');
  
    // Add event listener for the Enter key to submit the search query
    searchBox.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        searchBtn.click();
      }
    });
  
    
  
    //add event listener for seach button clicks
    searchBtn.addEventListener('click', function() {
      const query = searchBox.value;
  
      //hide the results container and show the loading spinner while fetching new data
      resultsContainer.style.display = 'none';
      loadingSpinner.style.display = 'block';
  
      //fetch book data from the google books api and display the results 
      fetch(API_ENDPOINT + query)
        .then(response => response.json())
        .then(data => {
          //hide the loading spinner and display the results container
          loadingSpinner.style.display = 'none';
          resultsContainer.style.display = 'block';
          resultsContainer.innerHTML = '';
  
          //create html elements for each book item in the response data 
          data.items.forEach(item => {
            const title = item.volumeInfo.title;
            const authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown';
            const description = item.volumeInfo.description ? item.volumeInfo.description.slice(0, 400) + '...' : 'No description available';
            const thumbnail = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '';
  
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
              <img src="${thumbnail}">
              <h2>${title}</h2>
              <p>${authors}</p>
              <p>${description}</p>
            `;
            
            resultsContainer.appendChild(resultItem);
          });
        })
        .catch(error => console.error(error));
    });
  
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




