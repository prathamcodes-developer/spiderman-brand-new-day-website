/* ===========================================
   MOBILE MENU
=========================================== */

const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {

    if(navLinks.style.display==="flex"){

        navLinks.style.display="none";

    }else{

        navLinks.style.display="flex";

        navLinks.style.flexDirection="column";

        navLinks.style.position="absolute";

        navLinks.style.top="80px";

        navLinks.style.right="20px";

        navLinks.style.background="#111";

        navLinks.style.padding="25px";

        navLinks.style.borderRadius="15px";

        navLinks.style.boxShadow="0 10px 30px rgba(255,0,60,.5)";
    }

});

/* ===========================================
   SCROLL REVEAL
=========================================== */

const revealElements=document.querySelectorAll(
".card,.box,.stats div,.gallery img,.video,#timer"
);

function reveal(){

    const trigger=window.innerHeight*0.85;

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        if(top<trigger){

            el.style.opacity="1";

            el.style.transform="translateY(0px)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(80px)";

    el.style.transition="1s";

});

window.addEventListener("scroll",reveal);

reveal();

/* ===========================================
   PARTICLE BACKGROUND
=========================================== */

for(let i=0;i<35;i++){

let particle=document.createElement("div");

particle.style.position="fixed";

particle.style.width="6px";

particle.style.height="6px";

particle.style.borderRadius="50%";

particle.style.background="rgba(255,255,255,.15)";

particle.style.left=Math.random()*100+"vw";

particle.style.top=Math.random()*100+"vh";

particle.style.pointerEvents="none";

particle.style.zIndex="-1";

particle.style.animation=
`float ${5+Math.random()*8}s linear infinite`;

document.body.appendChild(particle);

}

/* ===========================================
   RIPPLE BUTTON EFFECT
=========================================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.4)";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

circle.style.transform="scale(0)";

circle.style.animation="ripple .6s linear";

circle.style.pointerEvents="none";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/* ===========================================
   ACTIVE NAVIGATION
=========================================== */

const sections=document.querySelectorAll("section");
const links=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-150;
const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

current=sec.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

/* ===========================================
   TYPING EFFECT
=========================================== */

const heading=document.querySelector(".hero-content h2");

const text="The Ultimate Fan Experience";

let index=0;

heading.innerHTML="";

function type(){

if(index<text.length){

heading.innerHTML+=text.charAt(index);

index++;

setTimeout(type,80);

}

}

setTimeout(type,1800);

/* ===========================================
   RANDOM CARD GLOW
=========================================== */

setInterval(()=>{

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.style.boxShadow="none";

});

const random=Math.floor(Math.random()*cards.length);

cards[random].style.boxShadow=
"0 0 40px rgba(255,0,60,.7)";

},2500);

/* ===========================================
   FLOAT ANIMATION STYLE
=========================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(0);

opacity:.2;

}

50%{

transform:translateY(-80px);

opacity:.6;

}

100%{

transform:translateY(-160px);

opacity:0;

}

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

.active{

color:#00bfff !important;

font-weight:700;

}

`;

document.head.appendChild(style);
