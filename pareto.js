
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);


/*

const repeat = document.querySelector(".repeat");


const data = [
  { label: "Mon", value: 80 },
  { label: "Tue", value: 60 },
  { label: "Wed", value: 100 },
  { label: "Thu", value: 70 },
  { label: "Fri", value: 90 },
  { label: "Sat", value: 50 },
  { label: "Sun", value: 65 },
];

const chart = document.getElementById("chart");


const chartHeight = chart.clientHeight;
const barWidth = 50;
const spacing = 25;
const maxValue = Math.max(...data.map((d) => d.value));
*/

/*
function renderChart() {
  data.forEach((item, i) => {
   
    const wrapper = document.createElement("div");
    wrapper.className = "bar-wrapper";
    wrapper.style.left = `${i * (barWidth + spacing) + 50}px`;
    wrapper.style.width = `${barWidth}px`;

  
    const bar = document.createElement("div");
    bar.className = "bar";
    const barHeight = (item.value / maxValue) * (chartHeight - 60);
    bar.style.height = `${barHeight}px`;

   
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = item.label;

  
    wrapper.appendChild(bar);
    wrapper.appendChild(label);
    chart.appendChild(wrapper);

  
    gsap.to(bar,{
        scaleY: 1,
        duration:2,
        ease: 'elastic.out(1, 1.25)',
        delay: i * 0.1,

 

    })



   
  });
}

repeat.addEventListener("click", () => {
  chart.innerHTML = "";
  renderChart();
});

// Initial render
renderChart();

*/


const analyser = document.querySelector('.analyser');

const data = [

{month:'Januar', inntekter: 760000, driftsresultat: 16000},
{month:'Februar', inntekter: 876000, driftsresultat: 90000},
{month:'Mars', inntekter: 976000, driftsresultat: 10500},
{month:'April', inntekter: 340000, driftsresultat: 52000},
{month:'Mai', inntekter: 520000, driftsresultat: 20220},
{month:'Juni', inntekter: 1100000, driftsresultat: 12200},
{month:'Juli', inntekter: 1900000, driftsresultat: 9878},
{month:'August', inntekter: 678000, driftsresultat: 20000},
{month:'September', inntekter: 730000, driftsresultat: 45000},
{month:'Oktober', inntekter: 860000, driftsresultat: 36000},
{month:'November', inntekter: 765000, driftsresultat: 8732},
{month:'Desember', inntekter: 2200000, driftsresultat: 1900}

]


const chart = document.getElementById("søyle-diagram");


const chartHeight = chart.clientHeight;

const bredde = 50;
const mellomrom = 25;
const maxValue = Math.max(...data.map((d) => d.inntekter
), ...data.map((d)=> d.driftsresultat));



function display () {

data.forEach((verdi,i)=>{



    const boxmonthly = document.createElement('div');
    boxmonthly.className = 'boxmonthly';
    boxmonthly.style.left = `${i * (bredde + mellomrom) + 50}px`;
    boxmonthly.style.width = `${bredde}px`;



    const platen = document.createElement('div');
    platen.className = 'platen';
    const Høydeforboksen = (verdi.inntekter / maxValue) * (chartHeight - 60);
    platen.style.height = `${Høydeforboksen}px`;


    const label = document.createElement("div");
    label.className = "label";
    label.textContent = verdi.month;

 
    boxmonthly.appendChild(platen);
    boxmonthly.appendChild(label);
    chart.appendChild(boxmonthly);

  
    gsap.to(platen,{
        scale:1,
        duration:2,
        ease: 'elastic.out(1, 1.25)',
        delay: i * 0.2,
    })



});


 tegnYAkse(); 

}


analyser.addEventListener('click',()=>{
 chart.innerHTML = ''
 display();

})


display();

function tegnYAkse() {
  const antallSteg = 5;
  const maksSoylHoyde = chartHeight - 60;   // ← SAMME linjal som søylene!
  const steg = maksSoylHoyde / antallSteg;  // px mellom hvert merke

  for (let i = 0; i <= antallSteg; i++) {
    const verdiPaNivaa = Math.round((maxValue / antallSteg) * i);

    const merke = document.createElement('div');
    merke.className = 'y-merke';
    merke.textContent = verdiPaNivaa.toLocaleString('no-NO');
    merke.style.bottom = `${i * steg}px`;
    chart.appendChild(merke);

    const linje = document.createElement('div');
    linje.className = 'grid-linje';
    linje.style.bottom = `${i * steg}px`;
    chart.appendChild(linje);
  }
}








