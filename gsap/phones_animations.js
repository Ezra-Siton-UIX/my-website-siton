/*### 3 PHONES ANIMATION ###*/
let tl_phones = gsap.timeline({
  scrollTrigger: {
    trigger: "[wrap_phones]",
    start:
      "center 50%" /* when the center of the trigger hits the center of the scroller */,
    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
    end: "+=1500px",
    scrub: true,
    pin: true,
    once: false
  } /* end scrolltrigger */,
  defaults: { ease: "none" }
});
// animate the container one way...
tl_phones
  .fromTo(
    document.querySelector("[wrap_phones] [center_phone]"),
    { opacity: 0, scaleX: 7.2, scaleY: 7.2 },
    { opacity: 1, scaleY: "1.15", scaleX: "1.15" },
    0
  )
  .fromTo(
    document.querySelector("[wrap_phones] [left_phone]"),
    { opacity: 0, x: "100%" },
    { opacity: 1, x: "15%" },
    0.35
  )
  .fromTo(
    document.querySelector("[wrap_phones] [right_phone]"),
    { opacity: 0, x: "-100%" },
    { opacity: 1, x: "-15%" },
    0.35
  )
  .fromTo(
    document.querySelector("[phones_title]"),
    { opacity: 0 },
    { opacity: 1 },
    0.4
  );
