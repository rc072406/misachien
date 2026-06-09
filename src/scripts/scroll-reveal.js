// src/scripts/scroll-reveal.js

export function initScrollReveal() {
  const cards = document.querySelectorAll('.reveal-on-scroll');
  
  if (cards.length === 0) return;

  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const delay = target.getAttribute('data-delay') || 0;

        setTimeout(() => {
          target.classList.add('is-visible');
        }, Number(delay)); 

        
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  cards.forEach(card => observer.observe(card));
}
