const slides = document.querySelectorAll(".slides img");
let indexSlides=0;
let intervalId=null;
document.addEventListener("DOMContentLoaded", initializeSlide);
function  initializeSlide() {
    if(slides.length>0){
    slides[indexSlides].classList.add("displaySlide");   
     intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){
    if(index >= slides.length){
        indexSlides=0;
    }else if(index < 0){
        indexSlides=slides.length - 1;
    }
    slides.forEach(slide => {
    slide.classList.remove("displaySlide");
    });
    slides[indexSlides].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
     indexSlides--;
     showSlide(indexSlides);
}
function nextSlide(){
    indexSlides++;
    showSlide(indexSlides);
}