const cursorGlow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorGlow.style.opacity = '1';
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

