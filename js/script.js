const 
    // cursor = document.getElementById('cursor'),
    time = document.getElementById('time')
let 
    sticky__items = document.getElementById('sticky__items'),
    sticky__parent = document.getElementById('sticky__parent')
    scroll__width = sticky__items.scrollWidth, // Получение ширины содержимого   
    vertical__scroll__height = sticky__parent.getBoundingClientRect()/* Получение координатов*/.height - sticky__items.getBoundingClientRect().height
setInterval(() => {
    time.innerHTML = new Date().toLocaleTimeString()
}, 1000)
window.addEventListener('scroll', (e) => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
    let sticky__position = sticky__items.getBoundingClientRect().top
    if (sticky__position > 1) {
        return
    } else {
        let scrolled = sticky__parent.getBoundingClientRect().top
        sticky__items.scrollLeft = (scroll__width / vertical__scroll__height) * (-scrolled) * 0.85
    }
})