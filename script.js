let tl = gsap.timeline();


tl.from(".logo" ,{
    y:-100,
    duration:2
})

let tl2 = gsap.timeline(); 


tl2.from(".quality-box" ,{
    y:-700,
    duration:3
})
gsap.from(".social-box .fb",{
    y:-500,
    duration:4,
    
 })

gsap.from("#name-box h1",{
    x:-400,
})


 gsap.from(".main-btn" ,{
    y:-300,
    duration:5
})

let tla = gsap.timeline()

tla.from("#nav-item ",{
    y:-100,
    duration:3,
    stagger:1,
})

//  About Section 

gsap.from(".about-img-box img",{
    scale:0.5,
    duration:2,
    scrollTrigger:{
      scroller:"body",
      trigger:".about-img-box img",   
      stagger:2,
      yoyo:true,
      scrub:2,
    //   markers:true,
      start:"top 100%",
      end:"top 50%"
    }
})


let aboutText = gsap.timeline();

aboutText.from(".about-right-box h1",{
     y:-60,
     duration:2,
     scrollTrigger : {
     scroller:"body",
    //  markers:true,
     start:"bottom 100%",
     end:"bottom 20%",
     trigger:".about-right-box h1",
     scrub:3,
    }
})

aboutText.from(".about-right-box .details .row",{
    y:-100,
    duration:1,
    scrollTrigger : {
        scroller:"body",
        trigger:".about-right-box .details .row",
        scrub:1,
        // markers:true,
        start:"bottom 100%",
        end:"bottom 0"
    }
})

//  Detailse Page   

gsap.from(".service-main h1",{
    scale:0.5,
    duration:2,
    scrollTrigger:{
        trigger:".service-main h1 ",
        scroller:"body",
        scrub:2,
    }
})

gsap.from(".service-main .box",{
    scale:0.5,
    duration:2,
    scrollTrigger:{
        // markers:true,
        start:"top 100%",
        end:"bottom 100%",
        trigger:".service-main .box ",
        scroller:"body",
        scrub:2,
    }
})

// Portfolio Section 

gsap.from(".main-portfolio .box",{
    scale:0.5,
    duration: 0.5,
    scrollTrigger:{
        // markers:true,
        start:"top 100%",
        end:"bottom 100%",
        trigger:".main-portfolio .box ",
        scroller:"body",
        scrub:1,
    }
})

gsap.from(".main-contact",{
    scale:0.5,
    duration:2,
    scrollTrigger:{
        // markers:true,
        start:"top 100%",
        end:"bottom 100%",
        trigger:".main-contact",
        scroller:"body",
        scrub:2,
    }
})

// Lodder 
// ================>

function time(){
    var a = 0;
    setInterval(() => {
         a  += Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector("#loader h1").innerHTML=a+"%";   
        }else{
            a=100;
            document.querySelector("#loader h1").innerHTML=a+"%";   
        }
    },40);
}

time()


let tlload = gsap.timeline() 

tlload.to("#loader h1",{
   scale:2,
   delay:0.2,
})

tlload.to("#loader",{
    top:"-100vh",
    delay:0.2,
    duration:0.5, 
    opacity:0,
})


setInterval(()=>{
  let a  = document.getElementById("loader");
  a.style.transform="translateX : -100%" 
},1000)


let fnav = document.getElementById("fnav")
let snav = document.getElementById("snav")
let tnav = document.getElementById("tnav")
let fonav = document.getElementById("fonav")
let finav = document.getElementById("finav")


//  For Animation Writing 


var auto_text = document.getElementById("change")

var color= ["crimson","green"]; 

var typed = new Typed("#change",{
  strings : ["Rohit", "Programmer" ,"Youtuber" , "Developer"],
  typeSpeed:150,
  backSpeed:150,
  loop:true,    
}) 



// let resumeBtn = document.getElementById("resumeBtn");

// resumeBtn.addEventListener("click" , async () =>{
     
//      const url="https://drive.google.com/file/d/1PewG4hF4KUiPHylIyHL242xFMxpYzyux/view?usp=sharing";

//     const response = await fetch(url);

//     const blob = await response.blob();
//     const downloadLink = document.createElement("a")
//     downloadLink.href= URL.createObjectURL(blob);
//     downloadLink.download = "rohitkumarsahu-resume.pdf";
//     downloadLink.click()


// })




// Script For Nav Bar 


let menuBtn = document.getElementById("menuBtn")
let navItem = document.getElementById("nav-item")
menuBtn.addEventListener("click" ,()=>{

    menuBtn.classList.toggle("fa-xmark");  
      
    if(navItem.style.top=="80px"){
        navItem.style.top="-1000px"
    }else{
         navItem.style.top="80px";
         section.forEach(element => {
         });
         navItem.style.display="flex"
    }

});


let togglebtn = document.getElementById("toggleBtn");
let header = document.querySelector("header");
let p = document.querySelectorAll("p")
let section = document.querySelectorAll("section")
let topText = document.getElementById("topText")
let h = document.querySelectorAll("h1")
let ht = document.querySelectorAll("h3")


togglebtn.addEventListener("click" , ()=>{
   if(togglebtn.classList.contains("fa-moon")){
    togglebtn.classList.remove("fa-moon")
    toggleBtn.classList.add("fa-sun");     
    menuBtn.style.color="black"
    navItem.style.backgroundColor="rgba(255,255,255,0.7)"
    header.style.backgroundColor="white"
    topText.style.color="black"
    for (let i = 0; i<p.length; i++) {
    const element = p[i];
    element.style.color="black" 
   }
  
   for (let i = 0; i<section.length; i++) {
    const element = section[i];
    element.style.backgroundColor="white" 
   }
   
   
   for (let i = 0; i<h.length; i++) {
    const element = h[i];
    element.style.color="black" 
   }
   
   for (let i = 0; i<ht.length; i++) {
    const element = ht[i];
    element.style.color="black" 
   }
   

}else{
    togglebtn.classList.remove("fa-sun")
    toggleBtn.classList.add("fa-moon");
    header.style.backgroundColor="rgb(22,22,22)" 
    menuBtn.style.color="white"
    navItem.style.backgroundColor="rgb(22,22,22,0.7)"
    topText.style.color="white"
    
      for (let i = 0; i<p.length; i++) {
        const element = p[i];
        element.style.color="grey" 
       }
      
       for (let i = 0; i<section.length; i++) {
         const element = section[i];
         element.style.backgroundColor="rgb(22,22,22)" 
       }
       
    for (let i = 0; i<h.length; i++) {
     const element = h[i];
     element.style.color="white" 
   }
       
    for (let i = 0; i<ht.length; i++) {
     const element = ht[i];
     element.style.color="white" 
   }

   } 
})




