function initThemeToggle() {
    const toggleBtn = document.getElementById('contrast-toggle');
    if (!toggleBtn) return;
    
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️'; 
    } else {
        toggleBtn.textContent = '🌙'; 
    }

    toggleBtn.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        toggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
    });
}
