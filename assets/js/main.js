(() => {
  const button = document.getElementById('menuBtn');
  const nav = document.getElementById('navlinks');
  if (button && nav) {
    document.documentElement.classList.add('js');
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      button.querySelector('.menu-label').textContent = open ? 'Cerrar' : 'Menú';
    };
    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        button.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !button.contains(event.target)) setOpen(false);
    });
    const desktop = window.matchMedia('(min-width: 821px)');
    desktop.addEventListener('change', () => setOpen(false));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
