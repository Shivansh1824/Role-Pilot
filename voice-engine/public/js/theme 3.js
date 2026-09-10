// Role-Pilot Light Theme Enforcer (Permanent Light Theme)
document.documentElement.classList.add('light-theme');
try {
    localStorage.setItem('theme', 'light');
} catch (e) {}

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('light-theme');
    try {
        localStorage.setItem('theme', 'light');
    } catch (e) {}
});

