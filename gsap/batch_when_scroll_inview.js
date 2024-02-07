const duration_default = 0.8;
const stagger_level = 0.3;
const movement_level = 70;
const delay_level = 0;
const scale_level = 0.2;

gsap.defaults({ ease: "power1.out", duration: duration_default });
gsap.set("[animation=from_bottom]", { y: movement_level, opacity: 0 });
gsap.set("[animation=scale]", { scale: scale_level, opacity: 0 });
gsap.set("[animation=fade]", { opacity: 0 });
ScrollTrigger.batch("[animation=from_bottom]", {
  //interval: 0.1, // time window (in seconds) for batching to occur.
  //batchMax: 3,   // maximum batch size (targets)
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      delay: delay_level,
      stagger: { each: stagger_level },
      overwrite: true,
    }),
});

ScrollTrigger.batch("[animation=scale]", {
  //interval: 0.1, // time window (in seconds) for batching to occur.
  //batchMax: 3,   // maximum batch size (targets)
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      scale: 1,
      delay: delay_level,
      stagger: { each: stagger_level },
      overwrite: true,
    }),
});

ScrollTrigger.batch("[animation=fade]", {
  //interval: 0.1, // time window (in seconds) for batching to occur.
  //batchMax: 3,   // maximum batch size (targets)
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      delay: delay_level,
      stagger: { each: stagger_level },
      overwrite: true,
    }),
});

// when ScrollTrigger does a refresh(), it maps all the positioning data which
// factors in transforms, but in this example we're initially setting all the ".box"
// elements to a "y" of 100 solely for the animation in which would throw off the normal
// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we
// return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
ScrollTrigger.addEventListener("refreshInit", () =>
  gsap.set("[box-batch]", { y: 0 })
);
