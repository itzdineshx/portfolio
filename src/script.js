VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundColor: 0x000010,   // deep space blue-black
  color: 0x7fffd4,             // aquamarine (glow effect)
  points: 18.0,                // fewer points = more minimalist
  maxDistance: 30.0,           
  spacing: 20.0
});


// 2) Dark/Light theme toggle
const themeBtn = document.querySelector('.theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// 3) Scroll‑spy navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if (pageYOffset >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// 4) Reveal elements on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealEls.forEach(el => observer.observe(el));
