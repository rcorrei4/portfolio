document.addEventListener("DOMContentLoaded", () => {
  responsiveMenu()
  navbar()
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

  navBtns = menu.querySelectorAll('li')
  navBtns.forEach((navBtn) => {
    navBtn.onclick = () => {
      menuBtn.click()
    }
  })
}

function navbar() {
  var prevScrollpos = window.pageYOffset;
  let menu = document.querySelector('.menu')

  window.onscroll = function() {
    if (menu.className == 'menu open-menu') {
    } else {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
      } else {
        document.querySelector("nav").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  }
}