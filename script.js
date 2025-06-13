document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Modal functionality
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const registrationModal = document.getElementById('registrationModal');
    const loginModal = document.getElementById('loginModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const successMessage = document.getElementById('successMessage');
    
    // Show registration modal
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        registrationModal.style.display = 'block';
    });
    
    // Show login modal
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'block';
    });
    
    // Close modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            registrationModal.style.display = 'none';
            loginModal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === registrationModal) {
            registrationModal.style.display = 'none';
        }
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
    
    // Form submissions
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const consultationForm = document.getElementById('consultationForm');
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    // Registration form
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send data to a server
        console.log('Registration form submitted');
        registrationModal.style.display = 'none';
        showSuccessMessage();
    });
    
    // Login form
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send data to a server
        console.log('Login form submitted');
        loginModal.style.display = 'none';
        showSuccessMessage();
    });
    
    // Consultation form
    consultationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send data to a server
        console.log('Consultation form submitted');
        consultationForm.reset();
        showSuccessMessage();
    });
    
    // Contact form
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send data to a server
        console.log('Contact form submitted');
        contactForm.reset();
        showSuccessMessage();
    });
    
    // Newsletter form
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send data to a server
        console.log('Newsletter form submitted');
        newsletterForm.reset();
        showSuccessMessage();
    });
    
    // Show success message
    function showSuccessMessage() {
        successMessage.style.display = 'block';
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});