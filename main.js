var last_known_scroll_position = 0;
var ticking = false;

// Make the moving arrow disappear when the page is first scrolled.

function disappearArrow() {
    let arrow = document.querySelector(".down-arrow");
    arrow.classList.add("arrow-invisible")
}

function arrowScrollHandler(e) {
    if (window.scrollY != 0) {
        disappearArrow()
        window.removeEventListener("scroll", arrowScrollHandler)
    }
}
window.addEventListener("scroll", arrowScrollHandler)


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
