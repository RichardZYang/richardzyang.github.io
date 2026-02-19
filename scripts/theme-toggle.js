// Theme toggle for Hydejack (light/dark)
(function () {
  function applyTheme(isDark) {
    document.body.classList.toggle('custom-dark', isDark);
    
    // Directly set navbar background color
    const navbar = document.getElementById('_navbar');
    const navbarContent = navbar ? navbar.querySelector('.content') : null;
    const navBtnBar = navbar ? navbar.querySelector('.nav-btn-bar') : null;
    
    if (navbar) {
      navbar.style.backgroundColor = isDark ? '#000' : '';
      navbar.style.background = isDark ? '#000' : '';
    }
    if (navbarContent) {
      navbarContent.style.backgroundColor = isDark ? '#000' : '';
      navbarContent.style.background = isDark ? '#000' : '';
    }
    if (navBtnBar) {
      navBtnBar.style.backgroundColor = isDark ? '#000' : '';
      navBtnBar.style.background = isDark ? '#000' : '';
    }
  }

  function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');

    if (!toggle || !icon) {
      return;
    }

    const stored = localStorage.getItem('theme');
    const isDark = stored ? stored === 'dark' : document.body.classList.contains('custom-dark');
    applyTheme(isDark);

    icon.innerHTML = isDark
      ? '<path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a.75.75 0 0 0-.86.86A6 6 0 1 0 20.14 15.36a.75.75 0 0 0 .86-.86z"/>'
      : '<path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1zm0 12a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zm7.5-4.5a1 1 0 0 1 1 1 1 1 0 0 1-1 1H18a1 1 0 1 1 0-2h1.5zM6 12a1 1 0 0 1-1 1H3.5a1 1 0 1 1 0-2H5a1 1 0 0 1 1 1zm9.19-5.69a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM6.34 15.54a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zm10.25 1.41a1 1 0 0 1-1.41 0l-1.06-1.06a1 1 0 1 1 1.41-1.41l1.06 1.06a1 1 0 0 1 0 1.41zM7.75 7.75a1 1 0 0 1-1.41 0L5.28 6.69a1 1 0 1 1 1.41-1.41l1.06 1.06a1 1 0 0 1 0 1.41zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>';

    if (!toggle.dataset.bound) {
      toggle.addEventListener('click', () => {
        const nowDark = !document.body.classList.contains('custom-dark');
        applyTheme(nowDark);
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
        icon.innerHTML = nowDark
          ? '<path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a.75.75 0 0 0-.86.86A6 6 0 1 0 20.14 15.36a.75.75 0 0 0 .86-.86z"/>'
          : '<path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1zm0 12a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zm7.5-4.5a1 1 0 0 1 1 1 1 1 0 0 1-1 1H18a1 1 0 1 1 0-2h1.5zM6 12a1 1 0 0 1-1 1H3.5a1 1 0 1 1 0-2H5a1 1 0 0 1 1 1zm9.19-5.69a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM6.34 15.54a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zm10.25 1.41a1 1 0 0 1-1.41 0l-1.06-1.06a1 1 0 1 1 1.41-1.41l1.06 1.06a1 1 0 0 1 0 1.41zM7.75 7.75a1 1 0 0 1-1.41 0L5.28 6.69a1 1 0 1 1 1.41-1.41l1.06 1.06a1 1 0 0 1 0 1.41zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>';
      });
      toggle.dataset.bound = 'true';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
