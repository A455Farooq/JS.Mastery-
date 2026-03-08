

gsap.to('.cirkel',{

opacity:1,
scale:1,
duration:6,
onComplete:()=>{
    gsap.to('.cirkel',{
    boxShadow: "0 60px 80px rgba(29, 209, 161, 0.6)", 
    yoyo:true,
    repeat:-1,
    y:-25,
    duration:1.5,
    ease:"power1.inOut"


    });
}




});


















