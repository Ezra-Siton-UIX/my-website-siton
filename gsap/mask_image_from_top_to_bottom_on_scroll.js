gsap.registerPlugin(ScrollTrigger);
const reveal_duration = 1.5;
const easing_type = "expo.inOut";

document.addEventListener("DOMContentLoaded", function () {
  const wrappers = gsap.utils.toArray("[clip_wrapper]");
  wrappers.forEach(function (wrapper) {
    gsap.set(wrapper, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });

    ScrollTrigger.create({
      trigger: wrapper,
      start: "clamp(-3% bottom)", // when the top of the trigger hits the bottom of the viewport
      markers: false,
      onEnter: function () {
        revealItem(wrapper);
      },
      onLeaveBack: (self) => self.disable(),
    });
  });
}); /* end DOMContentLoaded */

function revealItem(elem, direction) {
  gsap.to(elem, {
    duration: reveal_duration,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: easing_type,
  });

  gsap.from(elem.querySelector("img"), {
    duration: reveal_duration * 1.2,
    autoAlpha: 0,
    ease: easing_type,
    scale: 1.1,
    delay: 0.0,
  });
}
