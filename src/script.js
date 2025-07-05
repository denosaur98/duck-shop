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
  const basePopup = document.querySelector('.base-popup-wrapper')
  const popupOverlay = document.querySelector('.popup-overlay')
  const formCloseButton = document.querySelector('.form__close-button')
  callbackButton.addEventListener('click', function() {
    callbackButton.classList.toggle('active')
    basePopup.classList.toggle('active')
  })
  popupOverlay.addEventListener('click', function() {
    basePopup.classList.remove('active')
    callbackButton.classList.remove('active')
  })
  formCloseButton.addEventListener('click', function() {
    basePopup.classList.remove('active')
    callbackButton.classList.remove('active')
  })

  const showMore = document.querySelector('.action__show-button')
  showMore.addEventListener('click', function() {
    showMore.classList.toggle('active')
  })

  const phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', formatPhone);
  phoneInput.addEventListener('keydown', handlePhoneBackspace);

  function formatPhone(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '')
    let cursorPos = input.selectionStart

    if (value.length === 1 && value !== '7') {
      value = '79' + value
    } else if (value === '7') {
      value = '79'
    } else if (value.length >= 2 && !value.startsWith('79')) {
      value = '79' + value.substring(1)
    }

    if (value.length > 11) {
      value = value.substring(0, 11)
    }

    const valueBeforeCursor = input.value.substring(0, cursorPos)
    const digitCountBeforeCursor = Math.max(valueBeforeCursor.replace(/\D/g, '').length - 2, 0)

    let formattedValue = value.length > 0 ? '+7 (9' : ''

    if (value.length > 2) {
      formattedValue += value.substring(2, 4)
      if (value.length > 4) {
        formattedValue += `) ${value.substring(4, 7)}`
        if (value.length > 7) {
          formattedValue += `-${value.substring(7, 9)}`
          if (value.length > 9) {
            formattedValue += `-${value.substring(9, 11)}`
          }
        }
      }
    }

    if (value.length > 2 && value.length <= 4) {
      formattedValue += ')'
    }

    input.value = formattedValue

    const newCursorPos = getCursorPosition(formattedValue, digitCountBeforeCursor)
    input.setSelectionRange(newCursorPos, newCursorPos)
  }

  function handlePhoneBackspace(event) {
    if (event.key === 'Backspace') {
      const input = event.target
      const cursorPos = input.selectionStart

      if (cursorPos <= 5) {
        event.preventDefault()
        return
      }

      if (!/\d/.test(input.value[cursorPos - 1])) {
        event.preventDefault()
        input.setSelectionRange(cursorPos - 1, cursorPos - 1)
      }
    }
  }

  function getCursorPosition(formattedValue, digitCountBeforeCursor) {
    let digitCount = 0
    let newCursorPos = formattedValue.length

    for (let i = 5; i < formattedValue.length; i++) {
      if (digitCount >= digitCountBeforeCursor) break
      if (/\d/.test(formattedValue[i])) digitCount++
      newCursorPos = i + 1
    }

    return Math.max(newCursorPos, 5)
  }
})