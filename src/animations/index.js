import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// let navList = document.querySelectorAll(".list");
// let textCon = document.querySelector("#text-con");

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

export const navAnimation = () => {
  tl.from(".navLis", {
    duration: 0.5,
    y: -20,
    opacity: 0,
    ease: "power3.easeIn",
  });
};

export const textAnimation = () => {
  tl.from(".textCon", {
    duration: 0.3,
    opacity: 0,
    y: 30,
    ease: "Power2.easeInOut",
    stagger: 0.5,
  })
    .from(".groupImg", {
      duration: 0.3,
      opacity: 0,
      x: -50,
      ease: "Power2.easeInOut",
    })
    .from(".rightImg", {
      duration: 0.5,
      opacity: 0,
      x: -70,
      ease: "Power4.easeInOut",
    })
    .from(".text-top", {
      scrollTrigger: {
        trigger: ".rightImg",
        start: "center 0",
        end: "bottom 0",
        toggleActions: "play none none none",
      },
      duration: 0.5,
      opacity: 0,
      y: -50,
      ease: "Power2.easeInOut",
    })
    .from(".text-bottom", {
      scrollTrigger: {
        trigger: ".groupImg",
        start: "center botttom",
        end: "bottom 0",
      },
      duration: 0.5,
      opacity: 0,
      y: 100,
      ease: "Power3.easeInOut",
    });
};

export const midAnimation = () => {
  gsap.utils.toArray(".imagescon").forEach((image) => {
    gsap.from(image, {
      scrollTrigger: {
        trigger: image,
        start: "center bottom",
        end: "bottom 0",
      },
      duration: 0.5,
      x: -100,
      opacity: 0,
      ease: "Power2.easeInOut",
      stagger: 0.5,
    });
  });
  gsap.utils.toArray(".txt-con").forEach((con) => {
    gsap.from(con, {
      scrollTrigger: {
        trigger: con,
        start: "center bottom",
        end: "bottom 0",
      },
      duration: 0.5,
      x: 100,
      opacity: 0,
      ease: "Power2.easeInOut",
      stagger: 0.5,
    });
  });
  gsap.from(".textCn", {
    scrollTrigger: {
      trigger: ".midCon",
      start: "bottom 90%",
      end: "bottom 95%",
    },
    duration: 0.5,
    opacity: 0,
    y: 30,
    ease: "Power2.easeInOut",
    stagger: 0.5,
  });
};

export const footerAnimation = () => {
  gsap.from(".footerCon", {
    scrollTrigger: {
      trigger: ".midCon",
      start: "bottom 90%",
      end: "bottom 95%",
    },
    duration: 0.5,
    opacity: 0,
    ease: "power2.easeIn",
  });
};
