// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navRight = document.querySelector('.nav-right');

if (hamburger && navRight) {
    hamburger.addEventListener('click', () => {
        const isActive = navRight.classList.toggle('active');
        hamburger.textContent = isActive ? '✕' : '☰';
        hamburger.setAttribute('aria-expanded', isActive);
    });

    // Close when clicking a link (mobile)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 820) {
                navRight.classList.remove('active');
                hamburger.textContent = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close when clicking outside (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 820 &&
            navRight.classList.contains('active') &&
            !navRight.contains(e.target) &&
            !hamburger.contains(e.target)) {
            navRight.classList.remove('active');
            hamburger.textContent = '☰';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

// ────────────────────────────────────────────────
// Executive Cards → Open Modal
// ────────────────────────────────────────────────
const teamCards = document.querySelectorAll('.team-card[data-modal]');

if (teamCards.length > 0) {
    teamCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking a link/phone inside the card
            if (e.target.closest('a, button, [href]')) return;

            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
            }
        });
    });

    // Close modal
    document.querySelectorAll('.modal-close, .modal').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal') ||
                e.target.hasAttribute('data-close') ||
                e.target.closest('[data-close]')) {
                const modal = e.target.closest('.modal');
                if (modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });
}



        const hamburger = document.getElementById('hamburger');
        const navRight = document.getElementById('navRight');

        hamburger.addEventListener('click', () => {
            navRight.classList.toggle('active');

            if (navRight.classList.contains('active')) {
                hamburger.textContent = '✕';
            } else {
                hamburger.textContent = '☰';
            }
        });

        // Close menu when clicking any link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navRight.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });
    

        