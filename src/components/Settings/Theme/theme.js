(function () {
    const applyTheme = (theme) => {
      const htmlElement = document.documentElement;
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
      } else if (theme === 'light') {
        htmlElement.classList.remove('dark');
      } else {
        // Mode système
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        systemDark
          ? htmlElement.classList.add('dark')
          : htmlElement.classList.remove('dark');
      }
    };
  
    // Applique le thème au chargement de la page
    const savedTheme = localStorage.getItem('theme') || 'system';
    applyTheme(savedTheme);
  
    // Écoute les changements de préférence système (uniquement en mode système)
    if (savedTheme === 'system') {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          applyTheme('system');
        }
      });
    }
})();