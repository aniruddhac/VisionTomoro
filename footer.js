document.addEventListener('DOMContentLoaded', function() {
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-links">
            <a href="our-story.html">About VisionTomoro</a>
            <span class="footer-separator">|</span>
            <a href="our-leaders.html">About our leaders</a>
            <span class="footer-separator">|</span>
            <a href="get-in-touch.html">Contact Us</a>
          </div>
          <p class="footer-copyright">&copy; 2025-26 VisionTomoro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
  
  // Insert footer at the end of body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
