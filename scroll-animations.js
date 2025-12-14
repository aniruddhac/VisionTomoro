document.addEventListener('DOMContentLoaded', function() {
  // Find all offering grids on the page
  const offeringGrids = document.querySelectorAll('.offerings-grid');
  
  if (offeringGrids.length === 0) return;
  
  // Create Intersection Observer to detect when section comes into view
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the section is visible
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Get all offering cards in this grid
        const cards = entry.target.querySelectorAll('.offering-card');
        
        // Add animate class to each card
        cards.forEach(card => {
          card.classList.add('animate');
        });
        
        // Stop observing this grid after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe each offerings grid
  offeringGrids.forEach(grid => {
    observer.observe(grid);
  });
});
