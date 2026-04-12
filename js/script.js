/* ============================================
   DEVONSHAE CREATIVE STUDIO — Main JS
   ============================================ */

// --- Year in footer ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Nav: add .scrolled on scroll ---
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// --- Mobile burger ---
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');
let menuOpen = false;
burger?.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    navLinks.style.cssText = `
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0; right: 0;
      background: var(--clr-blue);
      padding: 1.5rem 2rem;
      border-bottom: 1px solid var(--clr-border);
      gap: 1rem;
    `;
  } else {
    navLinks.removeAttribute('style');
  }
});

// --- Scroll reveal ---
const revealEls = document.querySelectorAll(
  '.about__content, .about__image, .services h2, .service__card, .testimonials h2, .testimonial, .cta__content'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = [...(entry.target.parentElement?.querySelectorAll('.reveal') || [])];
      const index = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${index * 0.1}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));
