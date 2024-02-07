// create
let mm = gsap.matchMedia();

/* On mobile no effect
 */
mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
});

// later, if we need to revert all the animations/ScrollTriggers...
mm.revert();

/*########## DESKTOP ########## */
// add a media query. When it matches, the associated function will run
mm.add("(min-width: 800px)", () => {
  const movement_value = 30; /* move R/L value VW **do not use value higher than 100 */
  const parallax_triggers = gsap.utils.toArray("[parallax_trigger]");

  parallax_triggers.forEach((parallax_trigger, i) => {
    var image = parallax_trigger.querySelector("img");
    var parallax_section_move = parallax_trigger.querySelector(
      "[parallax_section_move]"
    );
    var text_box = parallax_trigger.querySelector("[text_box]");

    const direction = parallax_trigger.getAttribute("direction");
    if (direction == null) direction = "left";

    if (direction == "right") {
      text_box.style.left = "0px";
      text_box.style.right = "auto";
    }

    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: parallax_trigger,
        pinSpacing: true,
        pin: true, // pin the trigger element while active
        start: "center center", // when the center of the trigger hits the center of the viewport
        end: () => "+=" + parallax_trigger.offsetHeight * 1.1,
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      defaults: {
        ease: "power1.inOut",
      },
    });

    /* set */
    tl.set(
      text_box,
      {
        width: `${movement_value}vw`,
      },
      "Start"
    );

    /* ANIMATION to / from */
    tl.to(
      parallax_section_move,
      {
        x: direction == "left" ? `-${movement_value}vw` : `${movement_value}vw`,
      },
      "Start"
    )
      .to(
        image,
        {
          scale: 1.5,
        },
        "Start"
      )
      .from(
        text_box,
        {
          x:
            direction == "left"
              ? `${movement_value}vw`
              : `-${movement_value}vw`,
          opacity: 0,
        },
        "0.05"
      );

    tl.from("body", {
      left: 10,
    });
  }); /* end forEach */
}); /* end matchMedia() */
