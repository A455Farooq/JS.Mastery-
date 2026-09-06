
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);



const btn = document.querySelector('.btn');
const diagram = document.querySelector('.diagram');

const data = [

{month:'jan',resultat:145000},
{month:'feb',resultat:234000},
{month:'mars',resultat:90000},
{month:'april',resultat:65000},
{month:'mai',resultat:500000},
{month:'juni',resultat:320000},
{month:'juli',resultat:96000},
{month:'aug',resultat:439000},
{month:'sept',resultat:133000},
{month:'okto',resultat:76000},
{month:'nov',resultat:88000},
{month:'des',resultat:340000}

]

const størstverdi = Math.max(...data.map((d)=> d.resultat))
const høydediagram = diagram.clientHeight;
const bredden = 60;
const mellomrom = 25;




function bi (){

data.forEach((henterdata,i)=>{



 const pakken = document.createElement('div');
 pakken.className = 'pakken';
 pakken.style.left = `${i * (bredden + mellomrom) + 40}px`;
 pakken.style.width = `${bredden}px`;


 const soylen = document.createElement('div');
 soylen.className = 'soylen';
 const høyde = (henterdata.resultat / størstverdi) * (høydediagram - 50);
 soylen.style.height = `${høyde}px`;







const tekst = document.createElement('div');
tekst.className = 'tekst';
tekst.textContent = henterdata.month;

pakken.appendChild(tekst);
pakken.appendChild(soylen);
diagram.appendChild(pakken);



gsap.to(soylen,{
    scaleY:1,
    duration:2,
    ease:'elastic.out(1, 1.25)',
    delay: i * 0.2,
})



});


ydata()

}


bi();



btn.addEventListener('click',()=>{

diagram.innerHTML = ''
bi();

})

function ydata(){

const antallSteg = 5;
const maksSøyleHøyde = høydediagram - 50;
const steg = maksSøyleHøyde/antallSteg;


for(let i = 0; i <= antallSteg; i++){
    const tall = Math.round((størstverdi/antallSteg) * i);

    const merke = document.createElement('div');
    merke.className = 'ytall';
    merke.textContent = tall.toLocaleString('no-NO');
    merke.style.bottom = `${i * steg}px`;
    diagram.appendChild(merke);


}





}






