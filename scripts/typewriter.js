document.addEventListener('DOMContentLoaded', () => {
  const writerText = document.querySelector('.hero__text')
  if (!writerText) return

  const phrases = [
    "I'm a frontend developer.",
    "I can do some great things for you."
  ]

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (prefersReducedMotion) {
    writerText.textContent = phrases.join('\n')
    return
  }

  let phrasesIndex = 0
  let charIndex = 0
  let isDeleting = false

  function type() {
    const currentPhrase = phrases[phrasesIndex]

    let speed = isDeleting ? 50 : 60
    
    if (!isDeleting) {
      charIndex++
    } else {
      charIndex--
    }
    
    writerText.textContent = currentPhrase.slice(0, charIndex)

    if (charIndex === currentPhrase.length) {
      isDeleting = true
      speed = 2500
    } else if (charIndex === 0) {
      isDeleting = false
      phrasesIndex = (phrasesIndex + 1) % phrases.length
      speed = 1000
    }

    setTimeout(type, speed)
  }

  type()
})