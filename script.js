// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const header = document.querySelector('.header');
      const secondaryNav = document.querySelector('.secondary-nav');
      const headerHeight = header ? header.offsetHeight : 0;
      const navHeight = secondaryNav ? secondaryNav.offsetHeight : 0;
      const offset = headerHeight + navHeight;
      
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Adjust secondary nav sticky position based on header height
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const secondaryNav = document.querySelector('.secondary-nav');
  
  if (header && secondaryNav) {
    function updateSecondaryNavPosition() {
      const headerHeight = header.offsetHeight;
      secondaryNav.style.top = headerHeight + 'px';
    }
    
    updateSecondaryNavPosition();
    window.addEventListener('resize', updateSecondaryNavPosition);
  }
});

// Mobile menu toggle (if needed for future enhancement)
document.addEventListener('DOMContentLoaded', function () {
  // Floating contact button visibility on scroll
  const floatingBtn = document.getElementById('floatingContactBtn');

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    // Header shadow effect
    if (window.scrollY > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    // Show floating button after scrolling 200px
    if (floatingBtn) {
      if (window.scrollY > 300) {
        floatingBtn.classList.add('visible');
      } else {
        floatingBtn.classList.remove('visible');
      }
    }
  });

  // Prevent dropdown from closing when clicking inside it
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

  // Contact form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        company: document.getElementById('company').value,
        jobTitle: document.getElementById('jobTitle').value,
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

  // Function to go to previous slide
  function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
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
    dot.addEventListener('click', function () {
      showSlide(index);
      restartCarousel();
    });
  });

  // Event listeners for arrow navigation
  const prevArrow = document.querySelector('.carousel-arrow-left');
  const nextArrow = document.querySelector('.carousel-arrow-right');

  if (prevArrow) {
    prevArrow.addEventListener('click', function () {
      prevSlide();
      restartCarousel();
    });
  }

  if (nextArrow) {
    nextArrow.addEventListener('click', function () {
      nextSlide();
      restartCarousel();
    });
  }

  // Initialize carousel
  if (slides.length > 0) {
    showSlide(currentSlide);
    startCarousel();
  }

  // Cloud Continuum Tabs
  const cloudTabBtns = document.querySelectorAll('.cloud-tab-btn');
  const cloudTabPanels = document.querySelectorAll('.cloud-tab-panel');

  cloudTabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const targetTab = this.getAttribute('data-tab');

      // Remove active class from all buttons and panels
      cloudTabBtns.forEach(b => b.classList.remove('active'));
      cloudTabPanels.forEach(p => p.classList.remove('active'));

      // Add active class to clicked button and corresponding panel
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navbar = document.querySelector('.navbar');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      navbar.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });

    // Toggle dropdown on mobile
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      const dropdown = item.querySelector('.dropdown');

      if (dropdown && link) {
        link.addEventListener('click', function (e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            item.classList.toggle('active');
          }
        });
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        if (!navbar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
          navbar.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      }
    });
  }
});

