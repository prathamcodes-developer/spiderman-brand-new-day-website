/* ===========================================
   READING PROGRESS BAR
=========================================== */

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.width = "0%";
progress.style.background = "linear-gradient(90deg,#ff1f3d,#00bfff)";
progress.style.zIndex = "999999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});

/* ===========================================
   NEWS SEARCH
=========================================== */

const search=document.createElement("input");

search.placeholder="Search News...";

search.style.width="320px";
search.style.padding="15px";
search.style.borderRadius="40px";
search.style.border="none";
search.style.margin="20px auto 50px";
search.style.display="block";
search.style.background="#111";
search.style.color="white";
search.style.outline="none";

document.querySelector(".news").insertBefore(search,document.querySelector(".news-grid"));

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const title=card.innerText.toLowerCase();

card.style.display=title.includes(value)?"block":"none";

});

});

/* ===========================================
   LIKE BUTTONS
=========================================== */

document.querySelectorAll(".card").forEach(card=>{

const like=document.createElement("button");

like.innerHTML="❤️ Like";

like.style.marginTop="20px";

card.querySelector(".content").appendChild(like);

let liked=false;

like.onclick=()=>{

liked=!liked;

if(liked){

like.innerHTML="💖 Liked";

like.style.background="#ff1f3d";

}else{

like.innerHTML="❤️ Like";

like.style.background="";

}

};

});

/* ===========================================
   SHARE BUTTONS
=========================================== */

document.querySelectorAll(".card").forEach(card=>{

const share=document.createElement("button");

share.innerHTML="🔗 Share";

share.style.marginLeft="10px";

card.querySelector(".content").appendChild(share);

share.onclick=()=>{

navigator.clipboard.writeText(location.href);

alert("Website link copied!");

};

});

/* ===========================================
   FEATURED NEWS AUTO SLIDER
=========================================== */

const cards=document.querySelectorAll(".card");

let active=0;

setInterval(()=>{

cards.forEach(card=>{

card.style.transform="scale(.95)";
card.style.opacity=".6";

});

cards[active].style.transform="scale(1.05)";
cards[active].style.opacity="1";
cards[active].style.boxShadow="0 0 40px rgba(255,0,60,.7)";

active++;

if(active>=cards.length){

active=0;

}

},3500);

/* ===========================================
   MUSIC TOGGLE
=========================================== */

const music=document.createElement("audio");

music.src="assets/theme.mp3";
music.loop=true;

document.body.appendChild(music);

const musicBtn=document.createElement("button");

musicBtn.innerHTML="🎵";

musicBtn.style.position="fixed";
musicBtn.style.left="25px";
musicBtn.style.bottom="25px";
musicBtn.style.width="60px";
musicBtn.style.height="60px";
musicBtn.style.borderRadius="50%";
musicBtn.style.border="none";
musicBtn.style.background="#ff1f3d";
musicBtn.style.color="white";
musicBtn.style.fontSize="24px";
musicBtn.style.cursor="pointer";
musicBtn.style.zIndex="999";

document.body.appendChild(musicBtn);

let playing=false;

musicBtn.onclick=()=>{

if(playing){

music.pause();

musicBtn.innerHTML="🎵";

}else{

music.play();

musicBtn.innerHTML="🔇";

}

playing=!playing;

};

/* ===========================================
   RANDOM QUOTES
=========================================== */

const quotes=[

"Every hero has a new beginning.",

"Great power comes with great responsibility.",

"Every day is a Brand New Day.",

"Heroes never stop fighting."

];

const quote=document.createElement("div");

quote.style.position="fixed";
quote.style.bottom="100px";
quote.style.right="25px";
quote.style.padding="15px 25px";
quote.style.background="rgba(0,0,0,.6)";
quote.style.backdropFilter="blur(10px)";
quote.style.borderRadius="15px";
quote.style.color="white";
quote.style.zIndex="999";

document.body.appendChild(quote);

setInterval(()=>{

quote.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];

},4000);
