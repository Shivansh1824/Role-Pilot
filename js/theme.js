// Run immediately to prevent flash of wrong theme (FOUC)
(function() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.documentElement.classList.add('light-theme');
    } else {
        document.documentElement.classList.remove('light-theme');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    // Sync button state with current class
    const isLight = document.documentElement.classList.contains('light-theme');
    themeToggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-theme');
        
        const isLightNow = document.documentElement.classList.contains('light-theme');
        themeToggleBtn.innerHTML = isLightNow ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
        const theme = isLightNow ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        
        // Dispatch custom event for dynamic components to update
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    });
});
