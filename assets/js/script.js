const header = document.getElementById('header')

const showHeader = () => {
    y=(window.scrollY==undefined)?(document.body || document.documentElement || document.body.parentNode).scrollTop : window.scrollY;
    if (y >= 20) {
        header.style.background = 'rgba(14, 29, 52, 0.9)'
    } else if (y <= 20) {
        header.style.background = 'none'
    }
}
showHeader()
document.addEventListener('scroll', showHeader)


AOS.init({
    once: true
});
