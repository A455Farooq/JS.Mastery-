
import { gsap } from "gsap";




const button = document.querySelector('.scroll-to-top');

let isFloating = false;



window.addEventListener('scroll',()=>{

    if(window.scrollY > 100){
      button.classList.add('show');
      
    }else{
        button.classList.remove('show');
    }

    if(!isFloating){
       gsap.to(button,{
       y:-10,
       duration: 1.5,
       repeat: -1,
       yoyo: true,
       ease: 'sine.out'
       })

       isFloating = true;

       
    }





});


button.addEventListener('click',()=>{

    window.scrollTo({
     top:0,
     behavior: 'smooth'
    });

});


button.addEventListener('mouseenter',()=>{
  
    gsap.to(button,{
        scale:1.5,
        duration: 0.2
    });

});

button.addEventListener('mouseleave',()=>{
  
    gsap.to(button,{
        scale:1,
        duration: 0.2
    });

});







