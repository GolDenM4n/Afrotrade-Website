// Add simple interaction for buttons
document.querySelector(".btn.primary").addEventListener("click", () => {
  alert("More info will be available soon!");
});

document.querySelector(".btn.outline").addEventListener("click", () => {
  alert("Contact page coming soon!");
});

// Scroll reveal effect
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// Back-to-top button functionality
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Ripple effect for buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    this.style.setProperty('--x', `${e.clientX - rect.left}px`);
    this.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});
