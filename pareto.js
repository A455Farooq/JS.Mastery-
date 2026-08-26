
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



const data = [

    {navn:'HAFT AS', beløp: 985000},
    {navn:'VALDMANIS & CO AS ', beløp: 765000},
    {navn:'Alan AS', beløp: 100000},
    {navn:'ENGEKJÆRVEIEN 9 AS', beløp: 654000},
    {navn:'BLØDEKJÆR 14 AS', beløp: 899000},
    {navn:'AI AGENTEN HAC AS', beløp: 1200000},
    {navn:'Santos AS', beløp: 90000}

];


const soylene = document.getElementById('soylene');


const høyden = soylene.clientHeight;

const bredden = 60;
const mellomrom = 25;
const maxVerdi = Math.max(...data.map((d)=> d.beløp));


function fremstillgrafen() {
  data.forEach((objektet, i) => {

    const parker = document.createElement('div');
    parker.className = "parker";
    parker.style.left = `${i * (bredden + mellomrom) + 50}px`;   // px!
    parker.style.width = `${bredden}px`;

    const selvesøylen = document.createElement('div');
    selvesøylen.className = 'selvesøylen';                       // tekst!
    const høydepåsøylen = (objektet.beløp / maxVerdi) * (høyden - 60);  // riktig formel!
    selvesøylen.style.height = `${høydepåsøylen}px`;             // mal + px!

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = objektet.navn;

    parker.appendChild(selvesøylen);
    parker.appendChild(label);
    soylene.appendChild(parker);

    gsap.to(selvesøylen, 

        { 
          scaleY: 1,
          duration:2.5,
          ease: 'elastic.out(1, 1.25)',
          delay: i * 0.5  
        });                       
  
  
  
  
    });
}

fremstillgrafen();   // ← og selve kallet!

