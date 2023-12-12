const menuButton = document.querySelector('.menu-button')
const navlink = document.querySelector('.nav-link')
menuButton.addEventListener('click', () => {
    navlink.classList.toggle('mobile-menu')
})