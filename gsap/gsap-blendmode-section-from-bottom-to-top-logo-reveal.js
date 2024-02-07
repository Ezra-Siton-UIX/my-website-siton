// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 991px)", () => {
  // this setup code only runs when viewport is at least 800px wide

  var blend_mode_element_animation_triggers = gsap.utils.toArray(
    "[blend_mode_element_animation_trigger]"
  );

  blend_mode_element_animation_triggers.forEach((trigger, i) => {
    const moving_from_bottom_to_top_wrapper = trigger.querySelector(
      "[moving_from_bottom_to_top_wrapper]"
    );

    moving_from_bottom_to_top_wrapper.style.position = "absolute";
    moving_from_bottom_to_top_wrapper.style.opacity = 1;
    const top_layer_with_blend_mode_and_white_bg = trigger.querySelector(
      "[top_layer_with_blend_mode_and_white_bg]"
    );
    const bottom_image = trigger.querySelector("[bottom_image]");
    const first_item_show_after_animation_ends = trigger.querySelector(
      "[text_after_animation_ends][first]"
    );

    var second_item_show_after_animation_ends = trigger.querySelector(
      "[text_after_animation_ends][second]"
    );

    var scale_animation_element = trigger.querySelector(
      "[scale_animation_element]"
    );

    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: trigger,
        pinSpacing: true,
        pin: true, // pin the trigger element while active
        start: "top top", // when the center of the trigger hits the center of the viewport
        end: () => "+=" + trigger.offsetHeight * 2.5,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      defaults: {
        ease: "power2.inOut",
      },
    });

    /* ANIMATION */
    tl.from(
      moving_from_bottom_to_top_wrapper,
      {
        y: "100%",
        duration: 1,
      },
      "Start"
    );

    tl.from(
      bottom_image,
      {
        opacity: 0.7,
        scale: 0.55,
        duration: 2.5 / 1.5,
      },
      "Start"
    );

    tl.fromTo(
      scale_animation_element,
      { scale: 0.6, y: 0 },
      { scale: 8, duration: 2.6 },
      "Start"
    );

    tl.to(
      top_layer_with_blend_mode_and_white_bg,
      {
        opacity: 0,
        duration: 1,
      },
      1
    );

    tl.from(
      first_item_show_after_animation_ends,
      {
        opacity: 0,
        scale: 0.5,
      },
      1.9
    );

    tl.from(
      second_item_show_after_animation_ends,
      {
        opacity: 0,
        scale: 0.5,
      },
      2.5
    );

    tl.from("body", {
      duration: 0.2,
    });
  });
}); /* end match media */
