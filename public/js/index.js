const toggleBtn = document.querySelector('#toggleBtn')
const openClose = document.querySelector('#hidden')
const bgChange = document.querySelector('#header')
toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openClose.classList.toggle('navbar-list-mobile')
    bgChange.classList.toggle('header-bg')
})
