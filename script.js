// Mobile Menu Toggle
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const navList = document.getElementById('nav-list');

mobileMenuIcon.addEventListener('click', function() {
  if (navList.style.display === "flex") {
    navList.style.display = "none";
  } else {
    navList.style.display = "flex";
    navList.style.flexDirection = "column";
  }
});

// Close mobile menu on link click
const navLinks = document.querySelectorAll('#nav-list li a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      navList.style.display = "none";
    }
  });
});

// Script pentru header modern
document.addEventListener('DOMContentLoaded', function() {
  // Variabile pentru elementele meniului
  const header = document.getElementById('main-header');
  const mobileMenuIcon = document.getElementById('mobile-menu-icon');
  const mainNav = document.getElementById('main-nav');
  const menuOverlay = document.getElementById('menu-overlay');
  const navLinks = document.querySelectorAll('#nav-list li a');

  // Funcție pentru header sticky la scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Funcție pentru deschiderea meniului mobil
  function toggleMobileMenu() {
    const isOpen = mainNav.classList.contains('active');
    
    if (isOpen) {
      mainNav.classList.remove('active');
      menuOverlay.classList.remove('active');
      mobileMenuIcon.innerHTML = '<i class="fas fa-bars"></i>';
      document.body.style.overflow = '';
    } else {
      mainNav.classList.add('active');
      menuOverlay.classList.add('active');
      mobileMenuIcon.innerHTML = '<i class="fas fa-times"></i>';
      document.body.style.overflow = 'hidden';
    }
  }

  // Adăugare evenimente click
  mobileMenuIcon.addEventListener('click', toggleMobileMenu);
  menuOverlay.addEventListener('click', toggleMobileMenu);

  // Închidere meniu la click pe link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        toggleMobileMenu();
      }
    });
  });

  // Închidere meniu la redimensionarea ecranului
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      menuOverlay.classList.remove('active');
      mobileMenuIcon.innerHTML = '<i class="fas fa-bars"></i>';
      document.body.style.overflow = '';
    }
  });
});