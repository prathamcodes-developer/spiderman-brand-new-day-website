/* ===========================
   LOADER
=========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},1800);

});

/* ===========================
   CURSOR GLOW
=========================== */

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

/* ===========================
   NAVBAR EFFECT
=========================== */

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

nav.classList.add("scrolled");

}

else{

nav.classList.remove("scrolled");

}

});

/* ===========================
   BACK TO TOP
=========================== */

const topBtn=document.getElementById("top");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ===========================
   COUNTDOWN
=========================== */

const releaseDate=new Date("July 31, 2026 00:00:00").getTime();

const timer=document.getElementById("timer");

setInterval(()=>{

const now=new Date().getTime();

const distance=releaseDate-now;

if(distance<0){

timer.innerHTML="🎉 NOW SHOWING";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const mins=Math.floor((distance%(1000*60*60))/(1000*60));

const secs=Math.floor((distance%(1000*60))/1000);

timer.innerHTML=

days+"d : "+

hours+"h : "+

mins+"m : "+

secs+"s";

},1000);

/* ===========================
   HERO PARALLAX
=========================== */

const hero=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth-e.pageX)/90;

let y=(window.innerHeight-e.pageY)/90;

hero.style.transform=`translate(${x}px,${y}px) scale(1.08)`;

});

/* ===========================
   NEWS CARD HOVER
=========================== */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=

`perspective(900px)

rotateX(${-(y-150)/18}deg)

rotateY(${(x-150)/18}deg)

scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

});

/* ===========================
   GALLERY CLICK EFFECT
=========================== */

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

let popup=document.createElement("div");

popup.style.position="fixed";

popup.style.left="0";

popup.style.top="0";

popup.style.width="100%";

popup.style.height="100%";

popup.style.background="rgba(0,0,0,.95)";

popup.style.display="flex";

popup.style.justifyContent="center";

popup.style.alignItems="center";

popup.style.zIndex="99999";

popup.innerHTML=

`<img src="${img.src}"

style="max-width:90%;

max-height:90%;

border-radius:20px;

box-shadow:0 0 50px red;">`;

document.body.appendChild(popup);

popup.onclick=()=>popup.remove();

});

});
