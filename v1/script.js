
// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2200);
});

// Custom Cursor
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX - 2 + 'px';
    cursorDot.style.top = mouseY - 2 + 'px';
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX - 10 + 'px';
    cursor.style.top = cursorY - 10 + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('.hoverable').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('scrollProgress').style.width = progress + '%';
});

// Scroll Reveal
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal, .stat-item, .exp-card, .roadmap-item, .contact-heading, .contact-sub, .contact-link').forEach(el => {
    observer.observe(el);
});

// Stats Counter
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.stat-number');
            const count = number.getAttribute('data-count');
            if (count) {
                let current = 0;
                const increment = () => {
                    if (current < parseInt(count)) {
                        current++;
                        number.textContent = current;
                        setTimeout(increment, 200);
                    }
                };
                increment();
            }
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(el => statObserver.observe(el));

// Side Navigation Active State
const sections = document.querySelectorAll('section');
const sideDots = document.querySelectorAll('.side-nav-dot');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    sideDots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.dataset.section === current) {
            dot.classList.add('active');
        }
    });
});

sideDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const section = document.getElementById(dot.dataset.section);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile Menu
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Parallax effect on blueprint
document.addEventListener('mousemove', (e) => {
    const blueprint = document.querySelector('.blueprint-container');
    if (blueprint) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        blueprint.style.transform = `translate(${x}px, ${y}px)`;
    }
});
