
let globalObserver = null;

export function initScrollReveal() {
 
  if (globalObserver) {
    globalObserver.disconnect();
  }

  const cards = document.querySelectorAll('.reveal-on-scroll');
  if (cards.length === 0) return;

  const observerOptions = {
    root: null,
    threshold: 0.1, 
    rootMargin: '0px 0px -30px 0px' 
  };

  globalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const delay = target.getAttribute('data-delay') || 0;

      
        setTimeout(() => {
          target.classList.add('is-visible');
          
          globalObserver.unobserve(target);
        }, Number(delay)); 
      }
    });
  }, observerOptions);

  cards.forEach(card => globalObserver.observe(card));
}
