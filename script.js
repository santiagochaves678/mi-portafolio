// Animación de entrada para las secciones usando IntersectionObserver
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Pequeño delay escalonado según el orden de la sección
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Efecto de click en cards: rebote
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.93)';
    setTimeout(() => {
      card.style.transform = '';
    }, 150);
  });
});

// Efecto de click en pills: rebote
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    pill.style.transform = 'scale(0.9)';
    setTimeout(() => {
      pill.style.transform = '';
    }, 150);
  });
});

// Año dinámico en el footer
const footer = document.querySelector('footer');
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} Santiago — Hecho con ❤️`;
}