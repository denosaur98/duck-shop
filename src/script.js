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

  const shopButton = document.querySelector('.action__shop-button')
  shopButton.addEventListener('click', function() {
    shopButton.classList.toggle('active')
    //todo
  })

  const callbackButton = document.querySelector('.action__callback-button')
  callbackButton.addEventListener('click', function() {
    callbackButton.classList.toggle('active')
  })

  const showMore = document.querySelector('.action__show-button')
  showMore.addEventListener('click', function() {
    showMore.classList.toggle('active')
  })
})