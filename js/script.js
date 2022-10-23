const 
    cursor = document.getElementById('cursor')
    // main__article = document.querySelector('.main__article-inner')
// main__article.addEventListener('wheel', (e) => {
//     e.preventDefault()
//     main__article.scrollLeft += e.deltaY
// }) 
window.addEventListener('scroll', (e) => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})
document.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", `top:${e.pageY-10}px; left:${e.pageX-10}px`)
})