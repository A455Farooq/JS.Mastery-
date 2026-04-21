
import { gsap } from "gsap";



gsap.to('.txtA',{
opacity:1,
scale:1.5,
duration:5,
onComplete:()=>{
 gsap.to('.txtA',{
    opacity:0,
    
 })
}

});

 
gsap.to('.txtB',{
  delay:5,
  opacity:1,
  scale:1.5,
  y:'-10',
  duration:5, 
  onComplete:()=>{
    gsap.to('.txtB',{    
     opacity:0,   
    })
  } 
    
});

gsap.to('.txtC',{
    delay:10,
    opacity:1,
    scale:1.5,
    y:'-20',
    duration:5,
    onComplete:()=>{
        gsap.to('.txtC',{
            opacity:0,
        })
    }
})

gsap.to('.txtD',{
    delay:15,
    opacity:1,
    scale:1.5,
    y:'-25',
    duration:5,
    onComplete:()=>{
        gsap.to('.txtD',{
            opacity:0
        })
    }
})

gsap.to('.didos',{
    delay:20,
    opacity:1,
    scale:1.5,
    y:'-28',
    duration:5,
    onComplete:()=>{
        gsap.to('.didos',{
            opacity:0
        })
    }
})


gsap.to('.nio',{
    delay:25,
    opacity:1,
    scale:1.7,
    y:'-30',
    duration:5,
    color:'red'
})




























