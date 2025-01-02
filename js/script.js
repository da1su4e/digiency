const body = document.body
const switchThemeBtn = document.getElementById('switchTheme-button')

const burgerBtn = document.querySelector('.burger__button')
const burgerWindow = document.querySelector('.burger__window')
switchThemeBtn.addEventListener('click', () => {
    if(switchThemeBtn.classList.contains('fa-solid')) {
        switchThemeBtn.classList.remove('fa-solid')
        switchThemeBtn.classList.add('fa-regular')
    } else {
        switchThemeBtn.classList.remove('fa-regular')
        switchThemeBtn.classList.add('fa-solid')
    }
    body.classList.toggle('dark-theme')
    localStorage.setItem('theme', body.classList.contains('dark-theme')? 'dark' : 'light')
})

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme')
    if(savedTheme === 'dark') {
        body.classList.add('dark-theme')
        switchThemeBtn.classList.remove('fa-solid')
        switchThemeBtn.classList.add('fa-regular')
    }  else {
        switchThemeBtn.classList.remove('fa-regular')
        switchThemeBtn.classList.add('fa-solid')
    }
})

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    burgerWindow.classList.toggle('none')
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 700) {
        burgerBtn.classList.remove('active')
        burgerWindow.classList.add('none')
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 17,
    breakpoints: {
    1000: {
        slidesPerView: 4,
    },
    
    700: {
    slidesPerView: 3,
    },
    484: {
        slidesPerView: 2,
    },
    280: {
        slidesPerView: 1.4,
        // spaceBetween: 1,
    },
    100: {
        slidesPerView: 1,
        // spaceBetween: 10,
    },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
});