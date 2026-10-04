
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

const mellomrom = 12;
const bredde = 75;

const toppunkt = Math.max(...data.map((d)=> d.omsetning));
const HøydepåDiagram = diagram.clientHeight;



function databehandling() {

   
    data.forEach((verdi,index)=>{

    const boksen = document.createElement('div');
    boksen.className = 'boksen';
    boksen.style.left = `${index * (mellomrom + bredde) + 90}px`;
    boksen.style.width = `${bredde}px`;
 
    const søylen = document.createElement('div');
    søylen.className = 'søylen';
    const høydepåSøylen = (verdi.omsetning / toppunkt) * (HøydepåDiagram - 20);
    søylen.style.height = `${høydepåSøylen}px`;
   

    const txt = document.createElement('div');
    txt.className = 'txt';
    txt.textContent = verdi.month;

    
    boksen.appendChild(txt);
    boksen.appendChild(søylen);
    diagram.appendChild(boksen);








    gsap.to(søylen,{
        scaleY:1,
        duration:2,
        ease:'elastic.out(1, 1.25)',
        delay: index * 0.2,

    })





    });





}


databehandling();