
import { gsap } from "gsap";


gsap.to('.a',{
  opacity:1,
  scale:1.2,
  duration:5,
  ease:"power2.out"
})



gsap.to('.b',{
    opacity:1,
    y:90,
    scale:2,
    ease:"power2.out",
    delay:1,
    duration:5
})


gsap.to('.nini',{
  y:210,
  x:1600,
  scale:1.2,
  ease:"power2.out",
  delay:2,
  duration:3

});

gsap.to('.nono',{
 x:1100,
 y:110,
 scale:1.2,
 ease:"power2.out",
 delay:2.5,
 duration:3,

});

gsap.to('.dodo',{
    x:560,
    scale:1.2,
    y:10,
    ease:"power2.out",
    delay:3,
    duration:3
})


