
import { gsap } from "gsap";


const bdata = document.querySelector('.btn')

const ni = gsap.to('.A',{

 x:680,
 duration:3,
 ease:"power2.out"

})

 gsap.to('.B',{
 y:680,
 duration:3,
 ease:"power2.out"
})

gsap.to('.C',{
 x:200,
 duration:5,
 ease:"power2.out"    
})

 gsap.to('.D',{
 y:200,
 duration:5,
 ease:"power2.out"   
})

bdata.addEventListener('click',()=>{

  ni.restart()


});












