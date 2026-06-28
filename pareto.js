
import { gsap } from "gsap";



gsap.to('.A',{
    scale:-0.5,
    duration:2,
    borderRadius:100,
    onComplete:()=>{
    
        gsap.to('.A',{
            scale:1.5,
            duration:3
        })
        


    }

})

 






















