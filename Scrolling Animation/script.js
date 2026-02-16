const heading = document.querySelector("#page2 h1");

gsap.to(heading, {
  x: () => -(heading.scrollWidth - window.innerWidth),
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: 3,
    pin: true,
  }
});
