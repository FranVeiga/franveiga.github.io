// Function that handles the disappearing moving arrow and the navbar animation
function ScrollHandler() {

    // Make the moving arrow disappear when the page is first scrolled, and then
    // it makes it appear if the user goes back up
    const arrow = document.querySelector(".down-arrow");
    if (window.scrollY != 0) {
        arrow.classList.add("arrow-invisible")
    } else {
        arrow.classList.remove("arrow-invisible")
    }


    // Make the navbar change its opacity when reaching the main body of the
    // page
    
    const navbar = document.querySelector("nav");
    const navbarIcons = document.querySelectorAll(".nav__logo, .nav__socials__item");
    if (window.scrollY >= 300 && window.scrollY <= 580) {

        // Sets where the navbar starts appearing and when it reaches full
        // opacity.
        let scrollStart = 300
        let scrollEnd = 580

        // This is a value from 0 to 1 which indicates how much the user has
        // scrolled into the 'scroll zone'.
        let scrollProgress = (window.scrollY - scrollStart) / (scrollEnd - scrollStart)

        let opacityLevel = scrollProgress;
        let heightLevel = 95 - scrollProgress * 95 * 2/5; // Control the final height of the navbar
        let scaleLevel = 1 - scrollProgress * 2/5; // Control the final size of the icons

        // TODO find a way to not have to change manually the background color of the
        // navbar.
        navbar.style.backgroundColor = `rgba(1,0,21,${opacityLevel})` // Original color: #020016
        navbar.style.height = `${heightLevel}px`

        // Scale each individual icon.
        navbarIcons.forEach(icon => {
            icon.style.transform = `scale(${scaleLevel})`
        })

    } else if (window.scrollY < 300) { 
        // Fix for bar not reaching full trnasparency
        navbar.style.backgroundColor = `rgba(1,0,21,0)`
    } else {
        // Fix for bar not reaching full opacity
        navbar.style.backgroundColor = `rgba(1,0,21,1)`
    }
}
window.addEventListener("scroll", ScrollHandler)



// Create the hover effect on 'tools'
let toolBoxes = document.querySelectorAll(".tools__box__div")

toolBoxes.forEach((toolBox) => {
    let toolImg = toolBox.getElementsByTagName("img")[0];
    let toolLabel = toolBox.getElementsByTagName("p")[0];
    toolBox.addEventListener("mouseenter", () => {
        // Make the label appear and the box to turn grey.
        toolLabel.classList.add("tools__box__label-visible")
        toolImg.classList.add("tools__box__img-active")
    })
    toolBox.addEventListener("mouseleave", () => {
        // Make the label disappear and the box to return to normal.
        toolLabel.classList.remove("tools__box__label-visible")
        toolImg.classList.remove("tools__box__img-active")
    })
})



// Appear on scroll using the IntersectionObserver API.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
        if (en.isIntersecting) {
            en.target.classList.add("visible")
            en.target.classList.remove("hidden")
            observer.unobserve(en.target) // Stop observing when element has appeared
        }
    })
}, {
    // Make it so the user can see the animations.
    threshold: 0.2
})

let hidden = document.querySelectorAll(".hidden")
hidden.forEach((el) => {
    observer.observe(el) // Make the observer observe all elements with the class 'hidden'
})
