function insertContactSection() {
  // Don't show contact section on get-in-touch.html page
  if (window.location.pathname.includes('get-in-touch.html')) {
    return;
  }

  const contactSectionHTML = `
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-image">
            <img src="images/visiontomoro_black_bg.jpg" alt="VisionTomoro Contact Image">
          </div>
          <div class="contact-content">
            <h2>Ready to transform your business?</h2>
            <p>Traditional consulting moves at the speed of slides. We move at the speed of code. Let’s architect your AI future and turn your technical debt into a competitive engine together.</p>
            <a href="get-in-touch.html" class="btn-secondary">Start a strategic discussion</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Insert contact section before footer
  const footer = document.querySelector('.footer');
  if (footer) {
    footer.insertAdjacentHTML('beforebegin', contactSectionHTML);
  } else {
    // If footer doesn't exist yet, try again after a short delay
    setTimeout(insertContactSection, 100);
  }
}

// Wait for DOM to be ready and then insert
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', insertContactSection);
} else {
  insertContactSection();
}
