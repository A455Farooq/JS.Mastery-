
import { gsap } from "gsap";


const play = document.querySelector('.btn');
const pause = document.querySelector('.pbtn');
const resume = document.querySelector('.rsm')
const restart = document.querySelector('.restart')


const anime = gsap.to('.A',{

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

play.addEventListener('click',()=>{
  anime.play()
});

pause.addEventListener('click',()=>{
    anime.pause()
})

resume.addEventListener('click',()=>{
   anime.resume()
});

restart.addEventListener('click',()=>{
   anime.restart()
});

















