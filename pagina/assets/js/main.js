
function openMenu(){
    document.getElementById("container-links").classList.add("active")
    document.getElementById("hover-interactive-header").classList.add("active")
}

function closeMenu(){
    document.getElementById("container-links").classList.remove("active")
    document.getElementById("hover-interactive-header").classList.remove("active")
}

addEventListener("resize", (event) => {
    if(window.innerWidth > 991 && document.getElementById("container-links").classList.contains("active")){
        closeMenu()
    }
});


/**
 * Back to top button
 */
let backtotop = select('.back-to-top')
if (backtotop) {
const toggleBacktotop = () => {
    if (window.scrollY > 100) {
    backtotop.classList.add('active')
    } else {
    backtotop.classList.remove('active')
    }
}
window.addEventListener('load', toggleBacktotop)
onscroll(document, toggleBacktotop)
}
