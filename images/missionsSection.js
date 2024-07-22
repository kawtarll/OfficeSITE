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

/*

 function showInfos(index){
    if(index >= infos.length){
        indexInfos=0;
    }else if( index < 0 ){
        indexInfos=infos.length - 1;
    }
   infos.forEach(info =>{
     info.classList.remove("displayInfo")
   });
   infos[indexInfos].classList.add("displayInfo");
}
function nextInfo(){
     indexInfos++;
     showInfos(indexInfos);
}
function prevInfo(){
    indexInfos--;
    showInfos(indexInfos);
*/
/*
const slides = document.querySelectorAll(".slide-container");
let indexSlides = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlide);

function initializeSlide() {
    if (slides.length > 0){
        slides[indexSlides].classList.add("display");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        indexSlides = 0;
    } else if (index < 0) {
        indexSlides = slides.length - 1;
    }
    slides.forEach(slideContainer => {
        slideContainer.classList.remove("display");
    });
    slides[indexSlides].classList.add("display");
}

function prevSlide() {
    clearInterval(intervalId);
    indexSlides--;
    showSlide(indexSlides);
    intervalId = setInterval(nextSlide, 5000);  // Restart the interval
}

function nextSlide() {
    indexSlides++;
    showSlide(indexSlides);
}*/