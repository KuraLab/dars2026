// Simple mobile menu toggle
(function() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  
  if (toggle && nav) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
})();

// Contact email address insertion
(function() {
  const CONTACT_EMAIL = 'dars2026 __at__ irs.sc.e.titech.ac.jp';
  const contactElement = document.getElementById('contact-email');
  
  if (contactElement) {
    contactElement.textContent = CONTACT_EMAIL;
  }
})();
