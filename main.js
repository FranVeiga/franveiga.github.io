// Make the moving arrow disappear when the page is first scrolled.

function arrowScrollHandler(e) {
    const arrow = document.querySelector(".down-arrow");
    if (window.scrollY != 0) {
        arrow.classList.add("arrow-invisible")
    } else {
        arrow.classList.remove("arrow-invisible")
    }
}
window.addEventListener("scroll", arrowScrollHandler)



// Create the effect on hovering 'tools'
let toolBoxes = document.querySelectorAll(".tools__box__div")

toolBoxes.forEach((toolBox) => {
    let toolImg = toolBox.getElementsByTagName("img")[0];
    let toolLabel = toolBox.getElementsByTagName("p")[0];
    toolBox.addEventListener("mouseenter", (e) => {
        toolLabel.classList.add("tools__box__label-visible")
        toolImg.classList.add("tools__box__img-active")
    })
    toolBox.addEventListener("mouseleave", (e) => {
        toolLabel.classList.remove("tools__box__label-visible")
        toolImg.classList.remove("tools__box__img-active")
    })
})



// Appear on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
        if (en.isIntersecting) {
            en.target.classList.add("visible")
            en.target.classList.remove("hidden")
        }
    })
}, {threshold: 0.2})

let hidden = document.querySelectorAll(".hidden")

hidden.forEach((el) => {
    observer.observe(el)
})
