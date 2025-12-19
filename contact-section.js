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
            <p>Let's discuss how VisionTomoro can help you achieve your vision and accelerate your digital transformation journey.</p>
            <a href="get-in-touch.html" class="btn-primary">Get in Touch<img src="images/up-arrow-removebg.png" alt="arrow" class="btn-arrow"></a>
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
