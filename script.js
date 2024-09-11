// Menu toggle functionality
function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

function closeMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.remove("show");
}

// Toggle dark/light mode
const toggleButton = document.getElementById('toggleMode');
const body = document.body;

toggleButton.addEventListener('click', function() {
  if (body.classList.contains('light-mode')) {
      body.classList.replace('light-mode', 'dark-mode');
      toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
      body.classList.replace('dark-mode', 'light-mode');
      toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

// Google Translate Script Initialization
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'fr,sw,es,de', // Add the language codes you want
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}
