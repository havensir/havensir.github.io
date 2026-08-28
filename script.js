// Scroll-spy: highlight the active commit as its section is in view
const sections = document.querySelectorAll('main section, .hero');
const commits = document.querySelectorAll('.commit');

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      commits.forEach(c => c.classList.toggle('active', c.dataset.target === id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(s => spy.observe(s));

// One-time typed effect for the hero eyebrow, skipped if reduced motion is set
const typedEl = document.getElementById('typed');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typedEl && !prefersReduced) {
  const full = '$ whoami';
  typedEl.textContent = '';
  let i = 0;
  const typeNext = () => {
    if (i <= full.length) {
      typedEl.textContent = full.slice(0, i);
      i++;
      setTimeout(typeNext, 55);
    }
  };
  typeNext();
}
