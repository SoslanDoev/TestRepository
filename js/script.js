const 
    cursor = document.getElementById('cursor'),
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

document.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", `top:${e.pageY-10}px; left:${e.pageX-10}px`)
})
// //Selecting Elements
// let sticky = document.querySelector('.sticky');
// let stickyParent = document.querySelector('.sticky-parent');

// let scrollWidth = sticky.scrollWidth;
// let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

// //Scroll function 
// function horizontalScroll(){

//     //Checking whether the sticky element has entered into view or not
//     let stickyPosition = sticky.getBoundingClientRect().top;
//     if(stickyPosition > 1){
//         return;
//     }else{
//         let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
//         sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;
    
//     }
// }