document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger')
  if (!burgerButton) return
  
  const desktopMedia = window.matchMedia('(min-width: 48em)')
  const menuLinks = document.querySelectorAll('.menu__link')

  const closeMenu = () => {
    burgerButton.setAttribute('aria-expanded', 'false')
  }

  const openMenu = () => {
    burgerButton.setAttribute('aria-expanded', 'true')
  }


  burgerButton.addEventListener('click', () => {
    const isExpanded = burgerButton.getAttribute('aria-expanded')

    if (isExpanded === 'true') {
      closeMenu()
    } else {
      openMenu()
    }
  })

  document.addEventListener('keydown', (event) => {
    const isExpanded = burgerButton.getAttribute('aria-expanded') === 'true'
    
    if (event.key === 'Escape' && isExpanded) {
      closeMenu()
      burgerButton.focus()
    }
  })

  desktopMedia.addEventListener('change', (event) => {
    if(event.matches) {
      closeMenu()
    }
  })

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu)
  })
})