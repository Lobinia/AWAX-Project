let currentSlide = 0;
let totalSlides = document.querySelectorAll('.banner .slidearea').length;

document.querySelector('.menu-opener').addEventListener('click', ()=>{

    if (document.querySelector('nav').style.display == ('flex')){
        document.querySelector('nav').style.display = ('none');
    } else {
        document.querySelector('nav').style.display = ('flex');
    }

})

const autoChangeSlides = () => {

    currentSlide++;

    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }

    updateMargin();
    updatePointers();
}

const updatePointers =  () => {

    document.querySelector('.banner .pointer.active').classList.remove('active');
    document.querySelectorAll('.banner .pointer')[currentSlide].classList.add('active');

}

const updateMargin = () => {

    document.querySelector('.banner .sliders').style.marginLeft = `-${currentSlide*100}vw`;

};

const timerSlides = setInterval(autoChangeSlides, 4000);

/*
@keyframes slides-cima {
	0% {display:none;}
	5%  {margin-left: 0;}
	10% {margin-left:0;}
	20% {margin-left: 0;}
	40% {margin-left: -200vw;}
	50% {margin-left: -200vw;}
	70% {margin-left: -400vw;}
	80% {margin-left: -400vw;}
	100% {margin-left: -700vw;}
}
*/