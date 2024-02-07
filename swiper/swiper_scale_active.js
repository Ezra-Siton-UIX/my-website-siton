const not_active_slide_scale_value = 0.85;
const not_active_slide_opacity_value = 0.4;

var swiper_scale_active = new Swiper("[swiper_scale_active]", {
  slidesPerView: 1.5,
  parallax: true,
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      speed: 900 /* Duration of transition between slides (in ms) */,
      slidesPerView: 1.2,
    },
    // when window width is >= 640px
    640: {
      speed: 1400,
    },
  },
  keyboard: {
    enabled: true,
  },
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  spaceBetween: 0,
  grabCursor: true,
  /*
        autoplay: {
          delay: 4000,
        },*/
  // Navigation arrows (not in use)
  navigation: {
    nextEl: "[btn_group] [next2]",
    prevEl: "[btn_group] [prev2]",
  },
  effect: "creative",
  creativeEffect: {
    limitProgress: 2, // slides after 2nd before/after active will have same state
    prev: {
      opacity: not_active_slide_opacity_value,
      scale: not_active_slide_scale_value,
      // will set `translateX(-90%)` on previous slides
      translate: ["-90%", 0, 0],
    },
    next: {
      opacity: not_active_slide_opacity_value,
      scale: not_active_slide_scale_value,
      // will set `translateX(90%)` on next slides
      translate: ["90%", 0, 0],
    },
  },
});

/* CUSTOM ARROWS CODE (WE want 5 click on next will change 5 slides - the speed is 0) */
const prev = document.querySelector("[btn_group] [prev]");
prev.addEventListener("click", prev_slide);

function prev_slide() {
  swiper_scale_active.slidePrev(0);
}

const next = document.querySelector("[btn_group] [next]");
next.addEventListener("click", next_slide);

function next_slide() {
  swiper_scale_active.slideNext(0);
}

/* API event example (Not in use in this code) */
swiper_scale_active.on("slideChange", function () {
  console.log("slide changed");
});

swiper_scale_active.on("keyPress", function (swiper, keyCode) {
  console.log(swiper);
  console.log("keyCode", keyCode);
});
