var swiper_thumbsNavbar = new Swiper("[thumbsNavbar]", {
  spaceBetween: 10,
  slidesPerView: "auto",
  centeredSlides: false,
  centeredSlidesBounds: false,
  slideToClickedSlide: true,
  freeMode: false,
  watchSlidesProgress: true,
});
var swiper_thumbsContent = new Swiper("[thumbsContent]", {
  spaceBetween: 33,
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    autoScrollOffset: 1,
    swiper: swiper_thumbsNavbar,
  },
});
