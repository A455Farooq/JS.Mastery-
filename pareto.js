
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


const page = document.querySelector(".page");
const navLogo = document.querySelector(".nav-logo");
const navToggler = document.querySelector(".nav-toggler");
const menuCols = document.querySelectorAll(".menu-col");
const isMobile = window.matchMedia("(max-width: 999px)");

const lenis = new Lenis({ wrapper: page, content: page, autoRaf: true });

SplitText.create(".menu-col a", {
  type: "words",
  wordsClass: "word",
  mask: "words",
});

let isNavHidden = false;

lenis.on("scroll", ({ direction }) => {
  const hide = direction === 1;
  if (hide === isNavHidden) return;
  isNavHidden = hide;

  gsap.to(navLogo, {
    x: hide ? -300 : 0,
    duration: 1.5,
    ease: "power3.out",
    overwrite: true,
  });
  gsap.to(navToggler, {
    x: hide ? 300 : 0,
    duration: 1,
    ease: "power3.out",
    overwrite: true,
  });
});

let isMenuOpen = false;
let tl;

navToggler.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  navToggler.classList.toggle("open", isMenuOpen);
  isMenuOpen ? lenis.stop() : lenis.start();

  tl?.kill();
  tl = gsap.timeline();

  tl.to(page, {
    y: isMenuOpen ? (isMobile.matches ? "65svh" : "50svh") : 0,
    scale: isMenuOpen ? (isMobile.matches ? 0.85 : 0.95) : 1,
    borderRadius: isMenuOpen ? "20px" : "0px",
    duration: 1,
    ease: "power3.inOut",
  });

  menuCols.forEach((col) => {
    col.querySelectorAll("a").forEach((link, i) => {
      tl.to(
        link.querySelectorAll(".word"),
        {
          y: isMenuOpen ? "0%" : "100%",
          duration: isMenuOpen ? 1 : 0.75,
          ease: "power3.out",
        },
        isMenuOpen ? 0.65 + i * 0.1 : 0.1,
      );
    });
  });
});







