console.log("Prueba");

/* Slide */

const sliderInner = document.getElementById("sliderInner");

const images = document.querySelectorAll(".image");

console.log(images);

let index = 0;

let percentage

setInterval(function () {

    percentage = index * -100;

    sliderInner.style.transform = "translateX(" + percentage + "%)";

    index++;

    if (index > (images.length - 1)){

        index = 0;
    }  

}, 10000);

/* Botones Slide */

function nextSlide() {

    if (index > (images.length - 2)){

        index = 0;

    }  else {

        index++;

    }

    percentage = index * -100;

    sliderInner.style.transform = "translateX(" + percentage + "%)";

    showSlide();
}

function prevSlide() {

    if (index < 1){

        index = (images.length - 1);

    }  else {

        index--;

    }

    percentage = index * -100;

    sliderInner.style.transform = "translateX(" + percentage + "%)";

    showSlide();
}