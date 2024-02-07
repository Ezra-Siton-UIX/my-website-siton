/* 2__ mask trick from top to bottom */
gsap.utils.toArray("[wrapper]").forEach((section) => {
  console.log(section.offsetHeight);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center center",
      // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
      end: () => "+=" + section.offsetHeight * 1.7,
      scrub: true,
      pin: true,
      once: false,
      anticipatePin: 1,
    } /* end scrolltrigger */,
    defaults: { ease: "none" },
  });
  // animate the container one way...
  tl.fromTo(
    section.querySelector("[top-box]"),
    { height: "100%" },
    { height: "0%" }
  ).fromTo(
    section.querySelector("[bottom-box]"),
    { opacity: "100%" },
    { opacity: "0%" }
  );
});

let gridTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".grid-section",
    scrub: 1,
    start: "top center",
    end: "bottom+=10% bottom",
  },
  defaults: {
    ease: "power1.inOut",
  },
});

gridTl
  .add("start")
  .from(
    ".grid-layout",
    {
      ease: "power1",
      scale: 3.2,
    },
    "start"
  )
  .from(
    ".column-1 .grid-image",
    {
      duration: 0.6,
      xPercent: (i) => -((i + 1) * 40 + i * 100),
      yPercent: (i) => (i + 1) * 40 + i * 100,
    },
    "start"
  )
  .from(
    ".column-3 .grid-image",
    {
      duration: 0.6,
      xPercent: (i) => (i + 1) * 40 + i * 100,
      yPercent: (i) => (i + 1) * 40 + i * 100,
    },
    "start"
  );

gsap.from(".parallax-section", {
  scale: 1 / 3,
  scrollTrigger: {
    trigger: ".parallax-section",
    scrub: 1.2,
  },
});
