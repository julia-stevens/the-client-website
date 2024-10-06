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
 
 