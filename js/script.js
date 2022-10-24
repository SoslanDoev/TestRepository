let 
    layers = document.getElementById('layers'),
    sticky__items = document.getElementById('sticky__items'),
    sticky__inner = document.getElementById('sticky__inner'),
    scroll__width = sticky__items.scrollWidth, // Получение ширины содержимого   
    vertical__scroll__height = sticky__inner.getBoundingClientRect()/* Получение координатов*/.height - sticky__items.getBoundingClientRect().height,
    sticky__position = 0,
    scrolled = 0,
    scroll__top = 0
window.addEventListener('scroll', (e) => {
    net()
    da()
})
function net() {
    /*Параллакс эффект*/
    scroll__top = this.scrollY
    if (scroll__top > window.screen.height) { return} else {
        document.body.style.cssText = `--scrollTop: ${scroll__top}px`
    }
}
function da() {
    sticky__position = sticky__items.getBoundingClientRect().top
    if (sticky__position > 1) { return } else {
        scrolled = sticky__inner.getBoundingClientRect().top
        sticky__items.scrollLeft = (scroll__width / vertical__scroll__height) * (-scrolled) / 0.90
    }
}