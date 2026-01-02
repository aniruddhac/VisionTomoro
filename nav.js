// Shared navigation menu for all pages
function loadNavigation() {
  const navHTML = `
    <div class="container">
      <div class="logo">
        <a href="index.html" class="logo-link">
          <img src="images/VisionTomoro-removebg-preview.png" alt="VisionTomoro" class="logo-image">
        </a>
      </div>
      <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="navbar">
        <ul class="nav-menu" id="navMenu">
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">AI<svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <div class="dropdown dropdown-two-column">
              <div class="dropdown-column">
                <div class="dropdown-column-header">
                  <span>AI</span>
                </div>
                <ul class="dropdown-list">
                  <li><a href="agentic-ai.html">Agentic AI and Autonomous Enterprise</a></li>
                  <li><a href="generative-ai.html">Enterprise Generative AI</a></li>
                  <li><a href="#">Responsible AI</a></li>
                  <li><a href="vibe-coding-agentic-devops.html">Vibe Coding & Agentic DevOps</a></li>
                  <li><a href="#">ML and Data Science</a></li>
                  <li><a href="#">AI Infrastructure</a></li>
                  <li><a href="llm-ml-data-agent-ops.html">LLM/ML/Data/Agent Ops</a></li>
                  <li><a href="#">Physical AI and Robotics</a></li>
                  <li><a href="#">Sovereign AI</a></li>
                  <li><a href="#">Sustainable AI</a></li>
                </ul>
              </div>
              <div class="dropdown-column">
                <div class="dropdown-column-header">
                  <span>Data</span>
                </div>
                <ul class="dropdown-list">
                  <li><a href="data-analytics.html">Data Management</a></li>
                  <li><a href="#">Modern Data Architecture</a></li>
                  <li><a href="#">Data Engineering</a></li>
                  <li><a href="#">Data Governance</a></li>
                  <li><a href="#">Data Operations</a></li>
                  <li><a href="ai-for-data-bi-analytics.html">AI for Data, BI and Analytics</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">Consulting<svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <div class="dropdown dropdown-two-column">
              <div class="dropdown-column">
                <div class="dropdown-column-header">
                  <span>CONSULTING</span>
                </div>
                <ul class="dropdown-list">
                  <li><a href="neo-consulting.html">Neo-Consulting</a></li>
                  <li><a href="ai-strategy.html">AI Strategy and Advisory</a></li>
                  <li><a href="data-strategy.html">Data Strategy</a></li>
                  <li><a href="technology-consulting.html">Technology Consulting</a></li>
                  <li><a href="consulting.html#architecture-consulting">Architecture Consulting</a></li>
                  <li><a href="consulting.html#digital-strategy">Digital Strategy and Assessment</a></li>
                </ul>
              </div>
              <div class="dropdown-column">
                <div class="dropdown-column-header">
                  <span>GCC</span>
                </div>
                <ul class="dropdown-list">
                  <li><a href="consulting.html#gcc-service">AI-First GCC as a Service</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">Digital<svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <div class="dropdown dropdown-two-column">
              <div class="dropdown-column">
                <div class="dropdown-column-header">
                  <span>Cloud</span>
                </div>
                <ul class="dropdown-list">
                  <li><a href="cloud.html">AI-Native Smart Cloud</a></li>
                  <li><a href="#">FinOps Driven Architecture & Ops</a></li>
                  <li><a href="devops-infra-automation.html">DevOps, VibeOps and Infra Automation</a></li>
                  <li><a href="modernization.html">Modernization</a></li>
                  <li><a href="app-portfolio-rationalization.html">Application Portfolio Rationalization</a></li>
                  <li><a href="#">Hybrid & Multi-Cloud</a></li>
                  <li><a href="#">AI for Cloud, Infra and Operations</a></li>
                </ul>
              </div>
              <div class="dropdown-column">
                <div class="dropdown-column-header">
                  <span>Digital</span>
                </div>
                <ul class="dropdown-list">
                  <li><a href="#">Digital Transformation</a></li>
                  <li><a href="application-services.html">Application Services</a></li>
                  <li><a href="microsoft-technologies.html">Microsoft Technologies</a></li>
                  <li><a href="#">Product and Platforms</a></li>
                  <li><a href="#">Enterprise Architecture</a></li>
                  <li><a href="emerging-technologies.html">Emerging Technologies</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">Industries<svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <ul class="dropdown">
              <li><a href="#">Healthcare and Life Sciences</a></li>
              <li><a href="#">Retail and CPG</a></li>
              <li><a href="#">Insurance</a></li>
              <li><a href="#">Banking and Financial Services</a></li>
              <li><a href="#">Utilities and Energy</a></li>
              <li><a href="#">Travel and Hospitality</a></li>
              <li><a href="#">Govt. and Public Service</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="what-we-think.html" class="nav-link">Insights</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">Who we are<svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <ul class="dropdown">
              <li><a href="success-stories.html">Success Stories</a></li>
              <li><a href="our-story.html">Our Story</a></li>
              <li><a href="our-leaders.html">Our Leaders</a></li>
              <li><a href="our-approach.html">Our Approach</a></li>
              <li><a href="get-in-touch.html">Get in Touch</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  `;

  const header = document.querySelector('.header');
  if (header) {
    header.innerHTML = navHTML;
    header.style.backgroundColor = '#181717'; // Match success stories background
    // Setup mobile menu after navigation is loaded
    setupMobileMenu();
  }
}

// Load navigation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
  loadNavigation();
}

// Mobile menu toggle functionality
function setupMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  const navBar = document.querySelector('.navbar');

  if (mobileMenuToggle && navBar) {
    mobileMenuToggle.addEventListener('click', function () {
      navBar.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!navBar.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
        navBar.classList.remove('active');
        mobileMenuToggle.classList.remove('active');

        // Only close dropdowns when mobile menu is closed, not on desktop
        if (window.innerWidth <= 768) {
          // Close all dropdowns when mobile menu is closed
          const navItems = document.querySelectorAll('.nav-item');
          navItems.forEach(item => {
            item.classList.remove('active');
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
              dropdown.style.display = 'none';
              dropdown.style.opacity = '0';
              dropdown.style.visibility = 'hidden';
              dropdown.style.maxHeight = '0';
            }
          });
        }
      }
    });
  }

  // Dropdown functionality for mobile
  const dropdownLinks = document.querySelectorAll('.nav-link.has-dropdown');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();

        const dropdown = this.nextElementSibling;
        const navItem = this.parentElement;

        // Close all other dropdowns first
        const allNavItems = document.querySelectorAll('.nav-item');
        allNavItems.forEach(item => {
          if (item !== navItem) {
            item.classList.remove('active');
            const otherDropdown = item.querySelector('.dropdown');
            if (otherDropdown) {
              otherDropdown.style.display = 'none';
              otherDropdown.style.opacity = '0';
              otherDropdown.style.visibility = 'hidden';
              otherDropdown.style.maxHeight = '0';
            }
          }
        });

        // Toggle current dropdown
        const isActive = navItem.classList.contains('active');

        if (isActive) {
          // Close the dropdown
          navItem.classList.remove('active');
          if (dropdown) {
            dropdown.style.display = 'none';
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.maxHeight = '0';
          }
        } else {
          // Open the dropdown
          navItem.classList.add('active');
          if (dropdown) {
            dropdown.style.display = 'block';
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
          }
        }
      }
    });
  });

  // Close dropdowns when clicking on a dropdown link
  const dropdownLinksInside = document.querySelectorAll('.dropdown a');
  dropdownLinksInside.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        // Close all dropdowns when a link is clicked
        const allNavItems = document.querySelectorAll('.nav-item');
        allNavItems.forEach(item => {
          item.classList.remove('active');
          const dropdown = item.querySelector('.dropdown');
          if (dropdown) {
            dropdown.style.display = 'none';
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.maxHeight = '0';
          }
        });

        // Close mobile menu
        const navBar = document.querySelector('.navbar');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        if (navBar && mobileMenuToggle) {
          navBar.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      }
    });
  });

  // Close dropdowns when window is resized to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      const dropdowns = document.querySelectorAll('.dropdown');
      const navItems = document.querySelectorAll('.nav-item');

      dropdowns.forEach(dropdown => {
        dropdown.style.display = '';
        dropdown.style.opacity = '';
        dropdown.style.visibility = '';
      });

      navItems.forEach(item => {
        item.classList.remove('active');
      });
    }
  });
}

// Setup mobile menu after navigation is loaded
document.addEventListener('DOMContentLoaded', setupMobileMenu);
