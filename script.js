
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



  // side bar script
  
  function showContent(subtopic) {
      var contents = document.querySelectorAll('.subtopic-content');
      contents.forEach(content => {
          content.classList.remove('active');
      });
      document.getElementById(subtopic).classList.add('active');
  }




  //Google Translate Script 
      function googleTranslateElementInit() {
          new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'fr,sw,es,de', // Add the language codes you want
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 'google_translate_element');
      }
  
