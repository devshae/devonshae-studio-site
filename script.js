/* ============================================================
   script.js — site-wide interactivity
   ============================================================ */

// ── Nav: add .scrolled class on scroll ──────────────────────
const nav = document.querySelector('.nav');

if (nav) {
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── Fade-in on scroll (Intersection Observer) ───────────────
const fadeEls = document.querySelectorAll('[data-fade]');

if (fadeEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeEls.forEach((el) => observer.observe(el));
}

// ── Add data-fade CSS to your stylesheet when using this:
// [data-fade] { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
// [data-fade].is-visible { opacity: 1; transform: none; }

// ── Utility: smooth scroll for anchor links ─────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
