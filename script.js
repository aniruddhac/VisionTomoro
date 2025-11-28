// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile menu toggle (if needed for future enhancement)
document.addEventListener('DOMContentLoaded', function() {
  // Add active state to navigation on scroll (optional enhancement)
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });

  // Prevent dropdown from closing when clicking inside it
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  // Contact form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        message: document.getElementById('message').value
      };

      // Log form data (in a real application, you would send this to a server)
      console.log('Form submitted:', formData);
      
      // Show success message
      alert('Thank you for contacting us! We will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }

  // Carousel functionality
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  let currentSlide = 0;
  let carouselInterval;

  // Function to show a specific slide
  function showSlide(index) {
    // Update slides
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === index) {
        dot.classList.add('active');
      }
    });

    currentSlide = index;
  }

  // Function to go to next slide
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  // Auto-advance carousel every 10 seconds
  function startCarousel() {
    carouselInterval = setInterval(nextSlide, 10000);
  }

  // Stop auto-advance (useful when user manually navigates)
  function stopCarousel() {
    clearInterval(carouselInterval);
  }

  // Restart auto-advance after manual navigation
  function restartCarousel() {
    stopCarousel();
    startCarousel();
  }

  // Event listeners for dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showSlide(index);
      restartCarousel();
    });
  });

  // Initialize carousel
  if (slides.length > 0) {
    showSlide(currentSlide);
    startCarousel();
  }
});

