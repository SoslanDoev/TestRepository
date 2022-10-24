const 
    // cursor = document.getElementById('cursor'),
    time = document.getElementById('time')
let 
    layers = document.getElementById('layers'),
    sticky__items = document.getElementById('sticky__items'),
    sticky__inner = document.getElementById('sticky__inner'),
    layers__nord1 = document.getElementById('layers__nord1'),
    layers__nord2 = document.getElementById('layers__nord2')
    scroll__width = sticky__items.scrollWidth, // Получение ширины содержимого   
    vertical__scroll__height = sticky__inner.getBoundingClientRect()/* Получение координатов*/.height - sticky__items.getBoundingClientRect().height
setInterval(() => { 
    time.innerHTML = new Date().toLocaleTimeString()
}, 1000)
layers.addEventListener('mousemove', function(event) {
    const half__width = layers.getBoundingClientRect().width
    layers__nord1.style.cssText += `--rotate__x: ${(event.offsetX / half__width)}%`
    layers__nord2.style.cssText += `--rotate__x: ${(event.offsetX / -half__width)}%`
    console.log(`nord1: --rotate__x: ${(event.offsetX / half__width)}%`)
    console.log(`nord2: --rotate__x: ${(event.offsetX / half__width)}%`)
})
window.addEventListener('scroll', (e) => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
    let sticky__position = sticky__items.getBoundingClientRect().top
    if (sticky__position > 1) { return } else {
        let scrolled = sticky__inner.getBoundingClientRect().top
        sticky__items.scrollLeft = (scroll__width / vertical__scroll__height) * (-scrolled) / 0.85 
    }
})