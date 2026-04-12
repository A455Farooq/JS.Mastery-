
import { gsap } from "gsap";



let display = document.querySelector('.display');
let data = ['A','B','C','D','E','F','G'];


function bi(){

   let html = '<ul>';

 for(let i = 0; i < data.length; i++){     
     html += `<li>${data[i]}</li>`;     
 }

  html +='</ul>'

  display.innerHTML = html;

}


bi();


 
  
































