(function () {
  const applyTheme = (theme) => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else if (theme === 'light') {
      htmlElement.classList.remove('dark');
    } else {
      const systemDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      systemDark
        ? htmlElement.classList.add('dark')
        : htmlElement.classList.remove('dark');
    }
  };

  const savedTheme = localStorage.getItem('theme') || 'system';
  applyTheme(savedTheme);

  if (savedTheme === 'system') {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => {
        if (!localStorage.getItem('theme')) {
          applyTheme('system');
        }
      });
  }
})();
