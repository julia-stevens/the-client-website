const programmaCard = document.querySelectorAll(".programma-card");
let activeCard = null; // Variable to store the currently active card

// Function to refresh the status of the active card based on the current time
function refreshStatus() {
    const currentHour = new Date().getHours(); // Get the current hour
    const currentHourFormatted = currentHour.toString().padStart(2, '0') + ":00"; // Format current hour

    let newActiveCard = null; // Variable to store the new active card

    // Loop through each card to determine if it should be active
    Array.from(programmaCard).forEach(card => {
        // Split the card's id into an array of hours
        const cardHours = card.id.split(" ");

        // Check if the current hour matches any of the card's time slots
        if (cardHours.includes(currentHourFormatted)) {
            // If this card should be active
            newActiveCard = card; // Set this card as the new active card
        }
    });

    // Update the active card only if it has changed
    if (newActiveCard !== activeCard) {
        // If there's a previously active card, deactivate it
        if (activeCard) {
            activeCard.classList.remove("active");
            activeCard.querySelector('.time-indicator').classList.remove('active'); // Deactivate animation for this card
        }

        // Set the new active card and activate it
        if (newActiveCard) {
            newActiveCard.classList.add("active");
            newActiveCard.querySelector('.time-indicator').classList.add('active'); // Activate the animation for this card
        }

        // Update the reference to the active card
        activeCard = newActiveCard;
    }
}

// Call refreshStatus immediately and then set up to call it every minute
refreshStatus(); 
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

var now = new Date();
var time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Customize the time format

// Insert time into HTML
document.getElementById("datetime1").innerHTML = time;
document.getElementById("datetime2").innerHTML = time;
document.getElementById("datetime3").innerHTML = time;
document.getElementById("datetime4").innerHTML = time;
document.getElementById("datetime5").innerHTML = time;
document.getElementById("datetime6").innerHTML = time;
document.getElementById("datetime7").innerHTML = time;
document.getElementById("datetime8").innerHTML = time;
document.getElementById("datetime9").innerHTML = time;

