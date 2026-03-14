/**
 * Turnstone LTD - Main JavaScript
 * Handles mobile navigation and interactive elements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // ================================
  // Sidebar Toggle
  // ================================

  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');

  if (sidebar && sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('expanded');
    });
  }

  // ================================
  // Active Sidebar Link Highlighting
  // ================================

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  sidebarLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ================================
  // Smooth Scroll for Anchor Links
  // ================================

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') return;

      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Calculate offset for fixed header
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, href);
      }
    });
  });

  // ================================
  // Form Validation (if contact form exists)
  // ================================

  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form fields
      const name = this.querySelector('#name');
      const email = this.querySelector('#email');
      const message = this.querySelector('#message');

      let isValid = true;

      // Simple validation
      if (name && name.value.trim() === '') {
        isValid = false;
        showError(name, 'Please enter your name');
      }

      if (email && !isValidEmail(email.value)) {
        isValid = false;
        showError(email, 'Please enter a valid email address');
      }

      if (message && message.value.trim() === '') {
        isValid = false;
        showError(message, 'Please enter a message');
      }

      if (isValid) {
        // Form is valid - you can add actual form submission here
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
      }
    });
  }

  // Helper function to validate email
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Helper function to show error
  function showError(input, message) {
    // Remove any existing error
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;

    input.parentElement.appendChild(errorDiv);
    input.style.borderColor = '#ef4444';

    // Remove error on input
    input.addEventListener('input', function() {
      this.style.borderColor = '';
      const error = this.parentElement.querySelector('.error-message');
      if (error) {
        error.remove();
      }
    }, { once: true });
  }

  // ================================
  // Lazy Loading Images (if any)
  // ================================

  const lazyImages = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window && lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }

  // ================================
  // Print Current Year in Footer
  // ================================

  const yearElement = document.querySelector('#current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
