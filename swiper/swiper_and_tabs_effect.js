/* ######### swiper ######### */

const swiper_solutions = new Swiper('[data-swiper="solutions"]', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 40,
  slideToClickedSlide: true,
  // If we need pagination
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true /* false by deafult */,
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  on: {
    beforeInit: function () {},
  },
});

var $beefup_tabs = $("[tab_menu] .beefup").beefup({
  openSingle: true,
  selfBlock: true,
  trigger: "[data-trigger]",
  content: "[data-content]",

  onOpen: function ($this) {
    console.log($this);
    // Do something after initially setup
  },
});

/* #### TAB MENU CODE #### */
/* on change set tab menu active */
swiper_solutions.on("slideChange", function () {
  let this_accordion_h = $("[tab_menu] .beefup").eq(this.realIndex);
  $beefup_tabs.open(this_accordion_h);
});

swiper_solutions.on("click", function () {
  swiper_solutions.slideNext();
});

$("[tab_menu] .beefup").eq(this.realIndex);

/* tab menu btn selector */
const btns = document.querySelectorAll("[tab_menu] button");
/* set the deafult active tab to 0 (first) */
btns[0].setAttribute("aria-selected", true);

if (btns.length > 0) {
  /* on click on custom menu slideTo index slide */
  btns.forEach(function (element, i) {
    // element refers to the DOM node
    /* add click event */
    element.addEventListener("click", function () {
      swiper_solutions.slideTo(i, 300, false);
    });
    /*#### Accessibility #### */

    /* add keyboard enter event */
    element.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        // code for enter
        //swiper_solutions.slideTo(i);
      }
    });
    /* match tab button to slide content - aria-controls */
    let swiper_this_slide = document.querySelectorAll(
      "[data-swiper='solutions'] .swiper-slide"
    )[i];
    /* aria-controls (add to tab menu) */
    element.setAttribute("aria-controls", i + "_btn");
    element.setAttribute("role", "tab");
    swiper_this_slide.id = i + "_btn";
    /* aria-labelledb (add to content - establishes relationships between tabs and their menu label) */
    swiper_this_slide.setAttribute("aria-labelledby", i + "_btn");
    element.id = i + "_btn";
  });
}
