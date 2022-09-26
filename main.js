
function initabout(){
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");
    tabsContainer.addEventListener("click", (event) => {
        console.log(event.target, 'event')
    })
}
initabout();

function init(){
    const sliderContainer = document.querySelector(".testimonial-slider-container"),
    slides = sliderContainer.querySelectorAll(".testimonial-item"),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector(".testimonial-slider-nav .prev"),
    nextBtn = document.querySelector(".testimonial-slider-nav .next"),
    activeSlide = document.querySelector(".testimonial-item.active")
    console.log(activeSlide)
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide)

    // set width of all slides
    slides.forEach((slide)=>{
        slide.style.width = slideWidth  + 'px'
    }) 
    sliderContainer.style.width = slideWidth * slides.length + 'px'

    nextBtn.addEventListener("click", ()=> {
        if(slideIndex === slides.length-1){
            slideIndex = 0;
        } else{
            slideIndex++;
        }
        sliderr()
    })
    prevBtn.addEventListener("click", ()=> {
        if(slideIndex === 0){
            slideIndex = slides.length-1;
        } else{
            slideIndex--;
        }
        sliderr()
    })
    function sliderr(){
        sliderContainer.querySelector(".testimonial-item.active").classList.remove("active")
        slides[slideIndex].classList.add("active")
        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + 'px'
    }
}
init();
