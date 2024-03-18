var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    },
  });






const bar = document.getElementById('bar');


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('activeb');
        bar.classList.add('activeb');
    });
}
const close = document.getElementById('close');
if(close){
close.addEventListener('click', () => {
    nav.classList.remove('activeb');
    bar.classList.remove('activeb')
    close.classList.add('activeb')
  
});
}