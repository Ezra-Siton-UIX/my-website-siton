gsap.registerPlugin(ScrollTrigger);
gsap.set("[data-panel]", {
  zIndex: (i, target, targets) => targets.length - i,
});

/* ###### PART ONE - images ###### */
const trigger_selector = "[section_trigger]";
var panels = gsap.utils.toArray("[data-panel]:not(:last-child)");
const timing = 1.5;

panels.forEach((panel, i) => {
  panel.style.position = "absolute";
  var square = panel.querySelector("[square]");
  var image = panel.querySelector("[absolute_image]");

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger_selector,
      start: () => "top -" + window.innerHeight * (i + 0.5),
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
    },
  });

  tl.to(image, { opacity: 0 });
  tl.to(square, { opacity: 0, y: 50 }, 0);
});

/* ###### PART TWO - text ###### */
gsap.set("[panel-text]", {
  zIndex: (i, target, targets) => targets.length - i,
  opacity: 0,
  position: "absolute",
});

gsap.set("[data-panel]", {
  zIndex: (i, target, targets) => targets.length - i,
});

var texts = gsap.utils.toArray("[panel-text]");

gsap.set(texts, {
  opacity: 0,
});

texts.forEach((text, i) => {
  var panel = document.querySelectorAll("[data-panel]")[i];
  var square = panel.querySelectorAll("[square]");

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger_selector,
      start: () => "top -" + window.innerHeight * i,
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
    },
  });
  /* text */
  tl.to(text, { duration: 1, opacity: 1, y: "50%" }).to(
    text,
    { duration: 2, opacity: 0, y: "0%" },
    timing
  );

  tl.from(square, { opacity: 0, y: -50 }, 0);
});

ScrollTrigger.create({
  trigger: "[section_trigger]",
  scrub: true,
  markers: false,
  pin: true,
  start: () => "top top",
  end: () => "+=" + (panels.length + 1) * window.innerHeight,
});
