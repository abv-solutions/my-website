const menuBtn = document.querySelector('.menu-btn')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.nav-item')
let showMenu = false
menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close')
    menuNav.classList.add('show')
    navItems.forEach((item) => item.classList.add('show'))
    showMenu = true
  } else {
    menuBtn.classList.remove('close')
    menuNav.classList.remove('show')
    navItems.forEach((item) => item.classList.remove('show'))
    showMenu = false
  }
}
