const hamburgerMenu = document.getElementById("hamburger");
const logo = document.getElementById("logo"); // Get the logo element by its ID

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("shake");
});

const menuOverlay = document.getElementById("menuOverlay");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  logo.classList.toggle("active"); // Toggle the 'active' class on the logo
});

// Add an event listener to detect when the user scrolls
window.addEventListener("scroll", showColumns);

function showColumns() {
  const packagesSection = document.getElementById("packages");
  const sectionTop = packagesSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // If the top of the packages section is within the viewport, add the 'show' class
  if (sectionTop < windowHeight - 100) {
    packagesSection.classList.add("show");
    // Remove the event listener to avoid repeatedly triggering the animation
    window.removeEventListener("scroll", showColumns);
  }
}