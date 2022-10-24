const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide);

document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide);

function moveToNextSlide(){
    console.log("next slide");
    hideAllSlides();

        // check if at end of slides
    if(slidePosition === totalSlides - 1){
        console.log("End of slides");
        // reset slide position back to beginning
        slidePosition = 0;
    } else{
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide(){
    console.log("prev slide");
    hideAllSlides();

    if(slidePosition === 0){
        slidePosition = totalSlides -1;
    } else{
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function hideAllSlides(){
    for(const slide of slides){
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

// possible feature extension - text on slides, automated slide transitions