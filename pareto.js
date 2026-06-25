
import { gsap } from "gsap";




gsap.to('.A',{
   x:100,
   scale:-0.5,
   ease:'sine.inOut',
   duration:2 
})

gsap.to('.B',{
  x:200,
  scale:-0.5,
  ease:'sine.inOut',
  duration:3.5,    
})

gsap.to('.C',{
 x:300,
 y:100,
 scale:-0.5,
 ease:'sine.inOut',
 duration:3.1,onComplete:()=>{
    gsap.to('.C',{
      y:300,
      x:500
    })
 }
})

 






















