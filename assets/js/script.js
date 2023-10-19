const openMenu = document.querySelector('.open-menu')
const menu = document.querySelector('#menu')

function toggleMenu() {
  menu.classList.toggle('menu-toggle')
}

const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 100,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  }
})
