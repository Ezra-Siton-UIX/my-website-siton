var scale_image_on_scroll_triggers = gsap.utils.toArray(
  "[scale_image_on_scroll_trigger]"
);

scale_image_on_scroll_triggers.forEach((scale_image_on_scroll_trigger, i) => {
  var parallax_section =
    scale_image_on_scroll_trigger.querySelector("[parallax_section]");
  var image = scale_image_on_scroll_trigger.querySelector("img");
  var second_section =
    scale_image_on_scroll_trigger.querySelector("[second_section]");
  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: scale_image_on_scroll_trigger,
      pinSpacing: true,
      pin: true, // pin the trigger element while active
      start: "center center", // when the center of the trigger hits the center of the viewport
      end: () => "+=" + scale_image_on_scroll_trigger.offsetHeight * 1.0,
      scrub: 4, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
    defaults: {
      ease: "power1.inOut",
    },
  });

  /* ANIMATION */
  tl.from(
    parallax_section,
    {
      clipPath: "inset(25% 25%)",
    },
    "Start"
  ).from(
    image,
    {
      opacity: 0.9,
      scale: 1.5,
      y: "0%",
    },
    "Start"
  );
});
