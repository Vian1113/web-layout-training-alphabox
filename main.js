import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper/bundle';

//index swiper
const swiper = new Swiper(".commentSwiper",{
  spaceBetween: 24,
  // 滑鼠中鍵滾輪可滑動
  mousewheel: true,
  direction: 'vertical',
  
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints:{
    992:{
      direction: 'horizontal',
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
      },
    }
    
  },



});

//product swiper
const swiperCharact = new Swiper(".charactSwiper",{
  // autoplay: {
  //   delay: 800,
  // },
  
  loop: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  

});