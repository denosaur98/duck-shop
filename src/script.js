document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.navigation__item')
  navItems.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault()

      navItems.forEach(item => {
        item.classList.remove('active')
        item.classList.add('initial')
      })

      link.classList.add('active')
      link.classList.remove('initial')
    })
  })
})