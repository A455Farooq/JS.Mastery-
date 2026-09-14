
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);


const data = [

{month:'jan',   omsetning:263000},
{month:'feb',   omsetning:460000},
{month:'mars',  omsetning:133000},
{month:'april', omsetning:200000},
{month:'mai',   omsetning:845000},
{month:'jun',   omsetning:934000},
{month:'juli',  omsetning:345000},
{month:'aug',   omsetning:689000},
{month:'sept',  omsetning:140000},
{month:'okt',   omsetning:522100},
{month:'nov',   omsetning:1000000},
{month:'des',   omsetning:764000}

]

const diagram = document.querySelector('.diagram');

const toppverdi = Math.max(...data.map((d)=> d.omsetning));
const bredde = 40;
const mellomrom = 60;

const høyden = diagram.clientHeight;



function nio(){

    data.forEach((item,i)=>{
   
         const platform = document.createElement('div');
         platform.className = 'platform';
         platform.style.left = `${i * (bredde + mellomrom) + 60}px`;
         platform.style.width = `${bredde}px`;
   
        
        const søylen = document.createElement('div');
        søylen.className = 'søylen';
        const sHøyden = (item.omsetning / toppverdi) * 600;
        søylen.style.height = `${sHøyden}px`;
        

        const txt = document.createElement('div');
        txt.className = 'txt';
        txt.textContent = item.month;
        
        platform.appendChild(txt);
        platform.appendChild(søylen);
        diagram.appendChild(platform); 


        gsap.to(søylen,{

            scaleY:1,
            duration:2,
            delay: i * 0.2,
            ease:'elastic.out(1, 1.25)',


        })


    });



}


function yyy() {

    const antallSteg = 10;
    const steg = (høyden/antallSteg)

    for(let i = 0; i <= antallSteg; i++){
        const tall = Math.round((toppverdi / antallSteg) * i);

        const nando = document.createElement('div');
        nando.className = 'nando';
        nando.textContent = tall.toLocaleString('no-NO');
        nando.style.bottom = `${steg * i}px`
        diagram.appendChild(nando);



    }





}





yyy();
nio();








