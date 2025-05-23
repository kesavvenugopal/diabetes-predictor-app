// theme-toggle.js

// Initialize theme toggle button to switch dark/light mode and toggle icons
export function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
  });
}
