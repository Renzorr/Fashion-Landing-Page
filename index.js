const tl = gsap.timeline();

tl.from("nav a", {
  y: "-100%",
  opacity: 0,
  delay: 0.2,
});

tl.from("h1", {
  x: "-100%",
  opacity: 0,
  delay: 0.2,
  duration: 1
});

tl.from("img", {
  scale: 1.5,
  opacity: 0,
});
