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
