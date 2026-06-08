/**
 * Role-Pilot Marketing Landing Page Script
 * Handles scrolling, redirects, and animations for the public-facing landing page.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scroll for "See How It Guides You" CTA
    const heroExploreBtn = document.getElementById('hero-explore');
    if (heroExploreBtn) {
        heroExploreBtn.addEventListener('click', () => {
            const guidesSection = document.getElementById('how-it-guides');
            if (guidesSection) {
                guidesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Smooth scroll for Header Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Header Sign In Redirect
    const headerSignInBtn = document.getElementById('header-signin-btn');
    if (headerSignInBtn) {
        headerSignInBtn.addEventListener('click', () => {
            // Redirect to the dedicated auth page
            window.location.href = 'form.html';
        });
    }

    // Add scroll listener for sticky header styling (optional enhancement)
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
