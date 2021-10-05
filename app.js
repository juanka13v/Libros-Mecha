const $nav = document.querySelector('.header');

window.addEventListener('scroll', e => {
    $nav.classList.toggle('active-header', window.scrollY > 0)
})