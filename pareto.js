
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);



const minisirkel = document.querySelectorAll('.trio');

minisirkel.forEach((nio,index)=>{


    gsap.fromTo(nio,{

         background:'',
         opacity:0,
         scale:0.1

    },{
   
        opacity:1,
        duration:0.9,
        scale:1.2,
        ease:'sine.inOut',
        repeat:-1,
        yoyo:true,
        delay: index * 0.1,
       


    })







})



const diagram = document.querySelector('.diagram');

const data = [

   {month:'januar',omsetning:1200000},
   {month:'februar',omsetning:900000},
   {month:'mars',omsetning:650000},
   {month:'april',omsetning:865200},
   {month:'mai',omsetning:432000},
   {month:'juni',omsetning:231000},
   {month:'juli',omsetning:140000},
   {month:'august',omsetning:398156},
   {month:'september',omsetning:100000},
   {month:'oktober',omsetning:1500000},
   {month:'november',omsetning:699000},
   {month:'desember',omsetning:766000}

]

