
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);


const bi = document.querySelectorAll('.bi');


bi.forEach((bi,index)=>{

  gsap.fromTo(bi,{

     scaleY: 0.4

  }, 
  
  {
    scaleY: 1.6,
    duration: 0.9,
    ease:'sine.inOut',
    repeat:-1,
    yoyo:true,
    delay: index * 0.1,
  

  });





});

