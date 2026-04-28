
import { gsap } from "gsap";


gsap.to('.A',{

opacity:1,
scale:1,
duration:5,
onComplete:()=>{
   
     gsap.to('.A',{
       opacity:0.5,
       scale:0.5,
       duration:2,
       rotateX:1440,
       ease:'back.in'

     });

}




});

























