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

const slidesTimer = setInterval(autoChangeSlides, 4000);


document.querySelectorAll('nav li').forEach(item => {
    item.addEventListener('click', event => {

        document.querySelector('nav li.active').classList.remove('active');

        event.currentTarget.classList.add('active');

    })
  })