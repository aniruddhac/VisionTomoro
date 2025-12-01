// Shared navigation menu for all pages
function loadNavigation() {
    const navHTML = `
    <div class="container">
      <div class="logo">
        <a href="index.html" class="logo-link"><img src="images/VisionTomoro-removebg-preview.png" alt="VisionTomoro" class="logo-image"></a>
      </div>
      <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="navbar">
        <ul class="nav-menu" id="navMenu">
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">AI</a>
            <ul class="dropdown">
              <li><a href="#">ML and Data Science</a></li>
              <li><a href="gen-ai-agentic-ai.html">Gen AI and Agentic AI</a></li>
              <li><a href="#">Responsible AI</a></li>
              <li><a href="data-analytics.html">Data and Analytics</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">Consulting</a>
            <ul class="dropdown">
              <li><a href="#">Strategy Consulting</a></li>
              <li><a href="#">AI Strategy and Readiness Assessment</a></li>
              <li><a href="#">Technology Consulting</a></li>
              <li><a href="#">Architecture Consulting</a></li>
              <li><a href="#">Digital Strategy and Assessment</a></li>
              <li><a href="#">GCC as a Service</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">What we do</a>
            <ul class="dropdown">
              <li><a href="cloud.html">Cloud</a></li>
              <li><a href="#">Digital Transformation</a></li>
              <li><a href="#">Application Services</a></li>
              <li><a href="devops-infra-automation.html">DevOps and Infra Automation</a></li>
              <li><a href="#">Modernization and Portfolio Rationalization</a></li>
              <li><a href="#">Microsoft Technologies</a></li>
              <li><a href="#">Program and Project Mgmt</a></li>
              <li><a href="#">Product and Platforms</a></li>
              <li><a href="#">Enterprise Architecture</a></li>
              <li><a href="#">Emerging Technologies</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">Industries we serve</a>
            <ul class="dropdown">
              <li><a href="#">Banking and Financial Services</a></li>
              <li><a href="#">Insurance</a></li>
              <li><a href="#">Healthcare and Life Sciences</a></li>
              <li><a href="#">Retail and CPG</a></li>
              <li><a href="#">Travel and Hospitality</a></li>
              <li><a href="#">Oil and Energy</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="what-we-think.html" class="nav-link">What we think</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">Who we are</a>
            <ul class="dropdown">
              <li><a href="#">Our story</a></li>
              <li><a href="our-leaders.html">Our leaders</a></li>
              <li><a href="#">Get in touch</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  `;

    const header = document.querySelector('.header');
    if (header) {
        header.innerHTML = navHTML;
    }
}

// Load navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
    loadNavigation();
}
