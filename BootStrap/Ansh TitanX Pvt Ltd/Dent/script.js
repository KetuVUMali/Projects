// When the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
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
          
          // Close mobile menu if open
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
          }
        }
      });
    });
  
    // Form submission handling
    const insuranceForm = document.getElementById('insurance-form');
    if (insuranceForm) {
      insuranceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formDataObj = {};
        formData.forEach((value, key) => {
          formDataObj[key] = value;
        });
        
        // Simulate form submission
        console.log('Form submitted with data:', formDataObj);
        
        // Show success message (you can replace this with your own logic)
        alert('Thank you! We have received your request and will contact you shortly.');
        
        // Reset form
        this.reset();
      });
    }
  
    // Initialize tooltips if Bootstrap 5 is loaded
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  
    // Animation on scroll (simple implementation)
    const animateElements = document.querySelectorAll('.service-card, .feature-card, .steps-card');
    
    function checkVisibility() {
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const isVisible = 
          elementPosition.top < window.innerHeight - 100 && 
          elementPosition.bottom > 0;
        
        if (isVisible) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Set initial styles
    animateElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Check initial visibility
    checkVisibility();
  });