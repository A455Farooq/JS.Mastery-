
import { gsap } from "gsap";


 

const btn = document.querySelector('.scroll-to-top');


window.addEventListener('scroll', () => {

if(window.scrollY > 100){
   btn.classList.add('show');
} else {
   btn.classList.remove('show')  
}

});

let erAAnimert = false;
let erBAnimert = false;
let erCAnimert = false;


window.addEventListener('scroll', () => {

if(erAAnimert === false){

  let plasseringA = document.querySelector('.bi').getBoundingClientRect().top;

   if(plasseringA < window.innerHeight){
       gsap.to('.bi',{
        opacity:1,
        x:100,
        duration:1.5,
        ease:'sine.out'
       });

       erAAnimert = true

   }


}



if(erBAnimert === false){

  let plasseringB = document.querySelector('.bii').getBoundingClientRect().top;

   if(plasseringB < window.innerHeight){
       gsap.to('.bii',{
        opacity:1,
        x:100,
        duration:1.5,
        ease:'sine.out'
       });

       erBAnimert = true;
   }


}


if(erCAnimert === false){
    let plasseringC = document.querySelector('.biii').getBoundingClientRect().top;

    if(plasseringC < window.innerHeight){
      
         gsap.to('.biii',{
            opacity:1,
            x:100,
            duration:1.5,

         });
         erCAnimert = true;


    }
}




});





