document.addEventListener("DOMContentLoaded", () => {
  responsiveMenu()
})

function responsiveMenu () {
  const menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu')
  let menuOpen = false;

  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menu.classList.add('open-menu');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menu.classList.remove('open-menu');
      menuOpen = false;
    }
  })
}