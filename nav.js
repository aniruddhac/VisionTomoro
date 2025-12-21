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
            <a href="#" class="nav-link has-dropdown">AI+<svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <ul class="dropdown">
              <li class="dropdown-group"><span>AI</span></li>
              <li><a href="agentic-ai.html">Agentic AI</a></li>
              <li><a href="generative-ai.html">Generative AI</a></li>
              <li><a href="#">Responsible AI</a></li>
              <li><a href="vibe-coding-agentic-devops.html">Vibe Coding & Agentic DevOps</a></li>
              <li><a href="#">ML and Data Science</a></li>
              <li><a href="#">AI Infrastructure</a></li>
              <li><a href="llm-ml-data-agent-ops.html">LLM/ML/Data/Agent Ops</a></li>
              <li><a href="#">Physical AI and Robotics</a></li>
              <li class="dropdown-group"><span>Data</span></li>
              <li><a href="data-analytics.html">Data and Analytics</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">Consulting<svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <ul class="dropdown">
              <li><a href="consulting.html#strategy-consulting">Neo-Consulting</a></li>
              <li><a href="ai-strategy.html">AI Strategy and Advisory</a></li>
              <li><a href="technology-consulting.html">Technology Consulting</a></li>
              <li><a href="consulting.html#architecture-consulting">Architecture Consulting</a></li>
              <li><a href="consulting.html#digital-strategy">Digital Strategy and Assessment</a></li>
              <li><a href="consulting.html#gcc-service">AI-First GCC as a Service</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link has-dropdown">Digital+<svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <ul class="dropdown">
              <li class="dropdown-group"><span>Cloud</span></li>
              <li><a href="cloud.html">Cloud</a></li>
              <li><a href="#">FinOps Driven Architecture & Ops</a></li>
              <li><a href="devops-infra-automation.html">DevOps, VibeOps and Infra Automation</a></li>
              <li><a href="modernization.html">Modernization</a></li>
              <li><a href="app-portfolio-rationalization.html">Application Portfolio Rationalization</a></li>
              <li class="dropdown-group"><span>Digital</span></li>
              <li><a href="#">Digital Transformation</a></li>
              <li><a href="application-services.html">Application Services</a></li>
              <li><a href="microsoft-technologies.html">Microsoft Technologies</a></li>
              <li><a href="#">Product and Platforms</a></li>
              <li><a href="#">Enterprise Architecture</a></li>
              <li><a href="emerging-technologies.html">Emerging Technologies</a></li>
            </ul>
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
              <li><a href="our-story.html">Our story</a></li>
              <li><a href="our-leaders.html">Our leaders</a></li>
              <li><a href="our-approach.html">Our approach</a></li>
              <li><a href="get-in-touch.html">Get in touch</a></li>
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
