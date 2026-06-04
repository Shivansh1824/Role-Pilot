document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;
    // Sync button symbol with startup theme state
    const isLight = document.documentElement.classList.contains('light-theme');
    themeToggleBtn.textContent = isLight ? '🌙' : '☀️';
    themeToggleBtn.addEventListener('click', () => {
        // Toggle class
        document.documentElement.classList.toggle('light-theme');
        
        const isLightNow = document.documentElement.classList.contains('light-theme');
        themeToggleBtn.textContent = isLightNow ? '🌙' : '☀️';
        
        // Save preference in localStorage
        const theme = isLightNow ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        
        // Broadcast custom event so dynamic page modules (e.g. charts) can re-render
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    });
});
