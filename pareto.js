
import { gsap } from "gsap";


const tl = gsap.timeline();

tl

.to('.papi',{
 opacity:1,
 scale:1,
 duration:3,
 ease:'power2.in'
})

.to('.papi',{
 opacity:0,
 duration:3,
 ease: 'power2.in'


}, '+=1')


.to('.nypapi',{
 opacity:1,
 scale:1,
 duration:2,
 ease: 'power2.in'

})

.to('.nypapi',{
    opacity:0,
    duration:2,
    ease: 'power2.in'
}, '+=1')

.to('.zipline',{
   opacity:1,
   scale:1,
   duration:2,
   ease: 'power2.in'
});



























