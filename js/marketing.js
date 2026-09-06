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

    // Global Page Transition & Smooth Scroll Logic
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Handle Hash Links (Smooth Scroll on same page)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            return;
        }
        
        // Handle Cross-Page Hash Links (e.g., index.html#how-it-guides)
        if (href.includes('.html#')) {
            const [page, hash] = href.split('#');
            // If we are already on that page, just scroll
            if (window.location.pathname.endsWith(page)) {
                e.preventDefault();
                const targetSection = document.getElementById(hash);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                return;
            }
        }
        
        // Internal page links are allowed to navigate natively (instant response)
    });

    // Header Sign In Redirect
    const headerSignInBtn = document.getElementById('header-signin-btn');
    if (headerSignInBtn) {
        headerSignInBtn.addEventListener('click', () => {
            // Redirect to the dedicated auth page
            window.location.href = 'login.html';
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

    // Smooth scroll for Scorecard CTA
    const viewLeaderboardBtn = document.getElementById('view-leaderboard-btn');
    if (viewLeaderboardBtn) {
        viewLeaderboardBtn.addEventListener('click', () => {
            // Activate the leaderboard tab in the dashboard preview
            const leaderboardTabBtn = document.querySelector('.nav-tab[data-target="leaderboard-tab"]');
            if (leaderboardTabBtn) {
                leaderboardTabBtn.click();
            }
            // Scroll to the dashboard section
            const dashboardSection = document.querySelector('.landing-dashboard-section');
            if (dashboardSection) {
                dashboardSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // Theme lock for Scorecard Image (Permanent Light Theme)
    const scorecardImg = document.getElementById('scorecard-theme-img');
    if (scorecardImg) {
        scorecardImg.src = 'images/leaderboard_dashboard_light.png';
    }
});
