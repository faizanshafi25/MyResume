// Mobile menu ---------------------------------------------------------------
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.hidden = !open;
}

menuBtn.addEventListener('click', () => {
    setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
});

// Close the mobile menu if the window is resized to desktop width
window.matchMedia('(min-width: 769px)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
});

// Highlight the current section in the navigation -----------------------------
const navLinks = document.querySelectorAll('.nav-links a');
const sections = [...document.querySelectorAll('main section[id]')];

function updateActiveLink() {
    const marker = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0].id;
    sections.forEach((section) => {
        if (section.offsetTop <= marker) current = section.id;
    });
    navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === '#' + current);
    });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
window.addEventListener('resize', updateActiveLink);
updateActiveLink();

// Reveal on scroll (skipped when the visitor prefers reduced motion) ----------
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });
}

// Footer year -----------------------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();
