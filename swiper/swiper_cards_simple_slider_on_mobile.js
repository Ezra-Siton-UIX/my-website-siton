const swiper_cards_icons = new Swiper('[data-swiper="cards_icons"]', {
  // Optional parameters
  loop: false,
  grabCursor: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slideToClickedSlide: true,
  parallax: false,
  // If we need pagination

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  on: {
    beforeInit: function () {},
  },
});
