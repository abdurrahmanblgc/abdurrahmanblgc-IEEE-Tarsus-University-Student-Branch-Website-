document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.neden-card');
    function checkCards() {
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          setTimeout(() => card.classList.add('visible'), i * 180);
        }
      });
    }
    window.addEventListener('scroll', checkCards);
    checkCards();

    // Hamburger menü aç/kapat
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');
const dropdowns = document.querySelectorAll('.navbar-menu .dropdown');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('open');
});

// Mobilde dropdown aç/kapat
if (window.innerWidth <= 900) {
  dropdowns.forEach(drop => {
    drop.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('open');
    });
  });
}
  });