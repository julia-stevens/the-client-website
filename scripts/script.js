const primaryMenu = document.getElementById("primary-menu");
const checkBox = document.getElementById("hamburger-menu");

checkBox.addEventListener("click", function() {
    primaryMenu.classList.toggle("clicked")
  });