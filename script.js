// const scroll = new LocomotiveScroll({
//   el: document.querySelector(""),
//   smooth: true,
// });

// ( video zooming animation ).

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers: true,
    start: "50% 50%",
    end: "250% 50%",
    scrub: 7,
    duration: 1,
    ease: "easeIn",
    pin: true,
  },
});
tl.to("video", {
  width: "95vw",
  height: "95vh",
});

// ( image stick worst generation )

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

// ( rubber string animation )

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#window",
    start: "50% 50%",
    end: "120% 50%",
    scrub: 3,
    ease: "easeIn",
    pin: true,
  },
});
tl.to(
  "#objects",
  {
    height: "100vh",
  },
  "a"
)
  .to(
    "#up",
    {
      top: "-50%",
    },
    "a"
  )
  .to(
    "#down",
    {
      bottom: "-50%",
    },
    "a"
  )
  .to(
    "#up h1",
    {
      bottom: "-10%",
    },
    "a"
  )
  .to(
    "#down h2",
    {
      bottom: "-60%",
    },
    "a"
  )
  .to("#objects", {
    // delay: -0.2,
    delay: -0.5,
    ease: "easeIn",
    marginTop: "0%",
  });
