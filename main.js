
function initabout(){
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {

        if(event.target.classList.contains("tab-item") && 
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target")
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", 'active');
            event.target.classList.add('outer-shadow', 'active')
            aboutSection.querySelector('.tab-content.active').classList.remove('active')
            aboutSection.querySelector(target).classList.add('active')
            console.log(event.target, target, 'target')

        }
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
