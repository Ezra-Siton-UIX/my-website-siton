document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  /* ## Key Features Animation ## */
  function animateFrom(elem, direction) {
    direction = direction || 1;

    var x = 0,
      y = direction * 100;
    if (elem.hasAttribute("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.hasAttribute("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.5,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo.out",
        overwrite: "auto",
      }
    );
  }

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }
  let gs_reveal = gsap.utils.toArray("[gs_reveal_n]");

  gs_reveal.forEach(function (elem) {
    if (window.innerWidth < 768) {
      return; // assure that the element is hidden when scrolled into view
    }

    hide(elem);
    ScrollTrigger.create({
      trigger: elem,
      once: false,
      markers: false,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
}); /* END DOMContentLoaded */
