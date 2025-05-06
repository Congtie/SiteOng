document.addEventListener('DOMContentLoaded', function() {
  // Elemente DOM
  const header = document.getElementById('main-header');
  const mobileMenuIcon = document.getElementById('mobile-menu-icon');
  const mainNav = document.getElementById('nav-list');
  const menuOverlay = document.getElementById('menu-overlay');
  const navLinks = document.querySelectorAll('#nav-list li a');

  // Header sticky la scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Funcție pentru deschiderea/închiderea meniului mobil
  function toggleMobileMenu() {
    const isOpen = mainNav.classList.contains('active');
    
    if (isOpen) {
      mainNav.classList.remove('active');
      if (menuOverlay) menuOverlay.classList.remove('active');
      mobileMenuIcon.innerHTML = '<i class="fas fa-bars"></i>';
      document.body.style.overflow = '';
    } else {
      mainNav.classList.add('active');
      if (menuOverlay) menuOverlay.classList.add('active');
      mobileMenuIcon.innerHTML = '<i class="fas fa-times"></i>';
      document.body.style.overflow = 'hidden'; // Previne scroll-ul în background
    }
  }

  // Adăugare eveniment click pentru butonul de meniu
  mobileMenuIcon.addEventListener('click', toggleMobileMenu);
  
  // Adăugare eveniment click pentru overlay (dacă există)
  if (menuOverlay) {
    menuOverlay.addEventListener('click', toggleMobileMenu);
  }

  // Închidere meniu la click pe link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });

  // Închidere meniu și resetare la redimensionarea ecranului
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      if (menuOverlay) menuOverlay.classList.remove('active');
      mobileMenuIcon.innerHTML = '<i class="fas fa-bars"></i>';
      document.body.style.overflow = '';
    }
  });
});