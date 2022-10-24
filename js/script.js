    // cursor = document.getElementById('cursor'),
let 
    layers = document.getElementById('layers'),
    sticky__items = document.getElementById('sticky__items'),
    sticky__inner = document.getElementById('sticky__inner'),
    scroll__width = sticky__items.scrollWidth, // Получение ширины содержимого   
    vertical__scroll__height = sticky__inner.getBoundingClientRect()/* Получение координатов*/.height - sticky__items.getBoundingClientRect().height
window.addEventListener('scroll', (e) => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
    let sticky__position = sticky__items.getBoundingClientRect().top
    if (sticky__position > 1) { return } else {
        let scrolled = sticky__inner.getBoundingClientRect().top
        sticky__items.scrollLeft = (scroll__width / vertical__scroll__height) * (-scrolled) / 0.90
    }
})