
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  })


});

  gsap.ticker.lagSmoothing(0);

  const spotlightSection = document.querySelector(".spotlight");
  const projectIndex = document.querySelector(".project-index h1");
  const projectImgs = document.querySelectorAll(".project-img");
  const projectImagesContainer = document.querySelector(".project-images");
  const projectNames = document.querySelectorAll(".project-names p");
  const projectNamesContainer = document.querySelector(".project-names");
  const totalProjectCount = projectNames.length;

  const spotlightSectionHeight = spotlightSection.offsetHeight;
  const spotlightSectionPadding = parseFloat(
    getComputedStyle(spotlightSection).padding,
  );
  const projectIndexHeight = projectIndex.offsetHeight;
  const containerHeight = projectNamesContainer.offsetHeight;
  const imagesHeight = projectImagesContainer.offsetHeight

  