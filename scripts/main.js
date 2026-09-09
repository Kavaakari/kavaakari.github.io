document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector ('.burger');
  const mainMenu = document.querySelector ('.menu');

  if(!burgerButton || !mainMenu) return;

  const closeMenu = () => { 
    burgerButton.classList.remove('is-active');
    mainMenu.classList.remove('is-open');
    document.body.classList.remove('is-lock');
    burgerButton.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = burgerButton.classList.toggle('is-active');
    mainMenu.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('is-lock', isOpen);
    burgerButton.setAttribute('aria-expanded', String(isOpen));
  };

  burgerButton.addEventListener('click', toggleMenu);

  mainMenu.addEventListener('click', (event) => {
    if (event.target.closest('.menu__link')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mainMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
});

