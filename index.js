enData = {
  "about-btn": "About",
  "projects-btn": "Projects",
  "contact-btn": "Contact",
  "resume-btn": "Resume",
  "welcome": "Welcome, my name is",
  "description": "Backend developer obsessed with artificial intelligence and a small dash of design",
  "contact_me": "Contact me",
  "about_title": "About",
  "about_text": "Aspiring programmer with 2 years of experience in personal projects. Since I was always a child in contact with a computer since I learned the first one at 10 years old, I developed a facility to learn any subject related to computers and I decided to start programming in 2019 when I started the Integrated High School to Technician in Systems Development. I aim to be a person of great impact and influence in the field of artificial intelligence and machine learning.",
  "projects_title": "Projects",
  "ibdb_description": "Site where people can contribute information about books, inspired by IMDb.",
  "libriumswap_description": "Capstone project that aimed to improve the circulation of books in Brazil through a website where people could sell, rent and exchange their books.",
  "gupy_description": "Gupy applications in one place.",
  "aliscript_description": "SLASH IT Promotion automation for Aliexpress.",
  "bot_description": "Telegram bot to send Microsoft Teams activities to a telegram chat.",
  "contact_title": "Contact me",
  "contact_text": "Interested? Get in touch on any of my social networks or send me an email.",
  "autor": "Designed and Built by Ricardo Santos",
}


document.addEventListener("DOMContentLoaded", () => {
  responsiveMenu()
  navbar()
  getLanguage()
  translate()
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
    if (prevScrollpos > 25) {
      document.querySelector('.sidebar').style.top = "20%";
    } else {
      document.querySelector('.sidebar').style.top = "25vh";
    }

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

function getLanguage() {
  lang = localStorage.getItem('language')

  if (!lang) {
    localStorage.setItem('language', 'pt')
  } else {
    if (lang == 'en') {
      document.querySelector('#enus').checked = true
      document.querySelector('#ptbr').checked = false

      translateElement('projects-btn')
      translateElement('contact-btn')
      translateElement('resume-btn')
      translateElement('welcome')
      translateElement('description')
      translateElement('contact_me')
      translateElement('projects_title')
      translateElement('ibdb_description')
      translateElement('libriumswap_description')
      translateElement('gupy_description')
      translateElement('aliscript_description')
      translateElement('bot_description')
      translateElement('contact_title')
      translateElement('contact_text')
      translateElement('autor')

      document.querySelector('#resume-btn').setAttribute('href', 'english.pdf')

    } else if (lang == 'pt') {
      document.querySelector('#enus').checked = false
      document.querySelector('#ptbr').checked = true
    }
  }
}

function translate() {
  enBtn = document.querySelector('#enus')
  ptBtn = document.querySelector('#ptbr')

  ptbr.onclick = () => {
    localStorage.setItem('language', 'pt')
    document.location.reload()
  }

  enBtn.onclick = () => {
    localStorage.setItem('language', 'en')
    document.location.reload()
  }
}

function translateElement(elementId) {
  document.querySelector(`#${elementId}`).innerText = enData[elementId]
}