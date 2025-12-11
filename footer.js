document.addEventListener('DOMContentLoaded', function() {
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025-26 VisionTomoro. All rights reserved.</p>
      </div>
    </footer>
  `;
  
  // Insert footer at the end of body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
