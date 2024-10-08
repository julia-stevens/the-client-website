// Hamburger menu 
const primaryMenu = document.getElementById("primary-menu");
const checkBox = document.getElementById("hamburger-menu");

checkBox.addEventListener("click", function() {
    primaryMenu.classList.toggle("clicked")
  });

// Programma cards 
const programmaCard = document.getElementsByClassName("programma-card");

const refreshStatus = () => {
  // Get current date/time
  let today = new Date();
  let currentHour = today.getHours();

  // Format current hour as "HH:00" (e.g., "11:00" for 11 AM, "15:00" for 3 PM)
  let currentHourFormatted = currentHour.toString().padStart(2, '0') + ":00";

  // Loop through all programma-card elements
  Array.from(programmaCard).forEach(card => {
    // Split the card's id into an array of hours (since ids have multiple hours)
    let cardHours = card.id.split(" ");

    // Check if any of the hours in the card's id matches the current hour
    if (cardHours.includes(currentHourFormatted)) {
      // Add 'active' class if it matches
      card.classList.add("active");
    } else {
      // Remove 'active' class if it doesn't match
      card.classList.remove("active");
    }
  });

  // Scroll into view the first element that matches the current hour if it exists
  const currentHourElement = Array.from(programmaCard).find(card => card.id.includes(currentHourFormatted));
  
  if (currentHourElement) {
    currentHourElement.scrollIntoView({
      behavior: "smooth", 
      block: "center"
    });
  }
};

// Call the function immediately to run on page load
refreshStatus();
// Set the interval to refresh every minute (60,000 milliseconds)
setInterval(refreshStatus, 60000);

// Bron: https://jsfiddle.net/mariusc23/s6mLJ/31/
// Hide .secondary-menu and .main-days on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;

// Targeting the secondary menu and main days elements
var secondaryMenu = $('.secondary-menu');
var mainDays = $('.main-days');

// Get the height of the navbar (secondary menu)
var navbarHeight = secondaryMenu.outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(window).scrollTop(); // Get the scroll position
    
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If scrolling down and past the navbar, add class to hide both elements
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll down: Hide the menu and main days
        secondaryMenu.addClass('secondary-menu-up');
        mainDays.addClass('main-days-up');
    } else {
        // Scroll up: Show both elements
        if (st + $(window).height() < $(document).height()) {
            secondaryMenu.removeClass('secondary-menu-up');
            mainDays.removeClass('main-days-up');
        }
    }
    
    lastScrollTop = st;
}


