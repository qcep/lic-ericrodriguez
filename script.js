/* ==================================================
   PRELOADER
   ================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
});

/* ==================================================
   NAVIGATION
   ================================================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* ==================================================
   TYPED.JS - TEXTO MECANOGRAFIADO (ENFOQUE LEGAL)
   ================================================== */
if (document.getElementById('typed-text')) {
    const typed = new Typed('#typed-text', {
        strings: [
            'Lic. en Derecho',
            'Abogado',
            'Compliance & Legal Tech',
            'Lic. en Derecho',
            'Analista de Contratos',
            'Lic. en Derecho',
            'Gestión Documental',
            'Lic. en Derecho'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });
}

/* ==================================================
   PARTICLES.JS
   ================================================== */
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#D4AF37' },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
            opacity: { value: 0.3, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: '#D4AF37', opacity: 0.15, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
}

/* ==================================================
   SCROLLREVEAL
   ================================================== */
const sr = ScrollReveal({
    origin: 'bottom', distance: '60px', duration: 1000, delay: 100,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', reset: false, mobile: true
});

sr.reveal('.section-header', { origin: 'top', distance: '40px' });
sr.reveal('.about-content', { origin: 'left', distance: '50px' });
sr.reveal('.about-timeline', { origin: 'right', distance: '50px', delay: 200 });
sr.reveal('.service-card', { interval: 100 });
sr.reveal('.expertise-tabs', { origin: 'top', distance: '40px' });
sr.reveal('.project-card', { interval: 150 });
sr.reveal('.cert-card', { interval: 100 });
sr.reveal('.testimonial-card', { interval: 150 });
sr.reveal('.contact-info .contact-card', { interval: 100 });
sr.reveal('.contact-form-wrapper', { origin: 'right', distance: '50px' });
sr.reveal('.footer-content', { origin: 'top', distance: '30px' });

/* ==================================================
   STATS COUNTER ANIMATION
   ================================================== */
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        updateCounter();
    });
}

const heroStats = document.querySelector('.hero-stats');
let counterAnimated = false;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterAnimated) {
            counterAnimated = true;
            animateCounters();
        }
    });
}, { threshold: 0.5 });

if (heroStats) {
    observer.observe(heroStats);
}

/* ==================================================
   EXPERTISE TABS (FALTABA ESTO EN TU SCRIPT)
   ================================================== */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover activo de todos
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        // Activar el seleccionado
        btn.classList.add('active');
        const targetTab = btn.getAttribute('data-tab');
        document.getElementById(`tab-${targetTab}`).classList.add('active');
    });
});

/* ==================================================
   PROJECTS FILTER (FALTABA ESTO EN TU SCRIPT)
   ================================================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover activo de todos los botones
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 50);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

/* ==================================================
   SWIPER TESTIMONIALS (FALTABA ESTO)
   ================================================== */
if (document.querySelector('.testimonials-slider')) {
    const swiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
}

/* ==================================================
   FORMS & BACK TO TOP (FALTABA ESTO)
   ================================================== */
// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        // Simulación de envío
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> ¡Mensaje Enviado!';
            btn.style.background = '#00FF88';
            btn.style.color = '#0A1628';
            this.reset();
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
            }, 3000);
        }, 1500);
    });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = this.querySelector('input');
        const btn = this.querySelector('button');
        const icon = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-check"></i>';
        input.value = '';
        setTimeout(() => btn.innerHTML = icon, 3000);
    });
}

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});