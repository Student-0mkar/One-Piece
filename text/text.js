// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// Sync Locomotive Scroll with GSAP ScrollTrigger
scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

// Refresh ScrollTrigger after Locomotive updates
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

// GSAP Animation
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2", // ✅ Fix: Use #page2 instead of the video itself
    scroller: "#main", // ✅ Fix: Make sure Locomotive Scroll is controlling it
    markers: true,
    start: "30% 50%", // ✅ Fix: Corrected start point
    end: "45% 50%", // ✅ Fix: Adjusted end point to avoid overlap
    scrub: 5,
    yoyo: true,
    pin: ".vid-div", // ✅ Fix: Pin the video container, not the whole page
  },
});

// ✅ Fix: Ensure we select the correct video element
tl.to("#page2 .vid-div video", {
  width: "90vw",
  height: "90vh",
  duration: 2, // ✅ Fix: Moved duration here instead of inside scrollTrigger
});
