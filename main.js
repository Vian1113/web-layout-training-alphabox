import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper/bundle';

//index intro swiper
const swiperIntro = new Swiper(".introSwiper",{
  loop: true,
  speed: 1000,
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints:{
    768: {
      autoplay: {
          enabled: true, //設定為false 為768px 以上時，放棄所有功能；設定為true 為768px 以上時，可調整下列設定
          delay: 1000,
        }
    }
    
  },



});

//index comment swiper
const swiperComment = new Swiper(".commentSwiper",{
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

  loop: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  

});