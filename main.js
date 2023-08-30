import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper';


const swiper = new Swiper(".commentSwiper",{
    spaceBetween: 24,
  // 滑鼠中鍵滾輪可滑動
  mousewheel: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },



});