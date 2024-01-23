let nextvar = document.getElementById('next');
let prevvar = document.getElementById('prev');

let carouselvar = document.querySelector('.carousel');
let Slidervar = carouselvar.querySelector('.carousel .list');
let thumbnailBordervar = document.querySelector('.carousel .thumbnail');
let thumbnailItemsvar = thumbnailBordervar.querySelectorAll('.item');
let timevar = document.querySelector('.carousel .time');

thumbnailBordervar.appendChild(thumbnailItemsvar[0]);
let timeAutoNext = 7000;

nextvar.onclick = function(){
    showSlider('next');    
}

prevvar.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsvar = Slidervar.querySelectorAll('.carousel .list .item');
    let thumbnailItemsvar = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        Slidervar.appendChild(SliderItemsvar[0]);
        thumbnailBordervar.appendChild(thumbnailItemsvar[0]);
        carouselvar.classList.add('next');
    }else{
        Slidervar.prepend(SliderItemsvar[SliderItemsvar.length - 1]);
        thumbnailBordervar.prepend(thumbnailItemsvar[thumbnailItemsvar.length - 1]);
        carouselvar.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselvar.classList.remove('next');
        carouselvar.classList.remove('prev');
    });

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}