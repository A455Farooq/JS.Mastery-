
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);



const data = [
   {month: 'januar',omsetning: 3200000},
   {month: 'februar',omsetning: 4300000},
   {month: 'mars',omsetning: 900000},
   {month: 'april',omsetning: 6700000},
   {month: 'mai',omsetning: 5600000},
   {month: 'juni',omsetning: 3200000},
   {month: 'juli',omsetning: 8700000},
   {month: 'august',omsetning: 7330000},
   {month: 'september',omsetning: 5490000},
   {month: 'oktober',omsetning: 9222000},
   {month: 'november',omsetning: 2100000},
   {month: 'desember',omsetning: 1900000}
]




const display = document.querySelector('.display');

const høydepåXaksen = display.clientHeight;
const søyleBredde = 50;
const mellomrom = 35;

const størstVerdi = Math.max(...data.map((d)=> d.omsetning));

console.log(størstVerdi);

function analyser(){

data.forEach((verdi,i)=>{


const trio = document.createElement('div');
trio.className = 'trio';
trio.style.left = `${i * (søyleBredde + mellomrom) + 50}px`;
trio.style.width = `${søyleBredde}px`;


const selveSøylen = document.createElement('div');
selveSøylen.className = 'selveSøylen';
const høydepåSøylen = (verdi.omsetning / størstVerdi * høydepåXaksen - 50);
selveSøylen.style.height = `${høydepåSøylen}px`;


const merke = document.createElement('div');
merke.className = 'merke';
merke.textContent = verdi.month;


trio.appendChild(selveSøylen);
trio.appendChild(merke);
display.appendChild(trio);


gsap.to(selveSøylen,{
    scaleY:1,
    duration:2
})



});




}






const bi = document.querySelector('.bi');

let aktiver = false;

bi.addEventListener('click',()=>{
   aktiver = !aktiver;

 bi.textContent = aktiver ? "+" : '-'
 





});



analyser();
