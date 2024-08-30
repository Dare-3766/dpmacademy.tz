
/// Script za menu icons
function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
    } else {
      navLinks.classList.add("show");
    }
  }
  
  function closeMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.remove("show");
  }