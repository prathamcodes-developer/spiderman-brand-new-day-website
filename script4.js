/* ===========================================
   PAGE VISIT COUNTER
=========================================== */

let visits = localStorage.getItem("visits");

if (!visits) {
    visits = 1;
} else {
    visits = Number(visits) + 1;
}

localStorage.setItem("visits", visits);

const visitBox = document.createElement("div");

visitBox.innerHTML = `
👥 Visitors<br>
<b>${visits}</b>
`;

visitBox.style.position = "fixed";
visitBox.style.left = "20px";
visitBox.style.top = "120px";
visitBox.style.background = "rgba(255,255,255,.08)";
visitBox.style.backdropFilter = "blur(15px)";
visitBox.style.padding = "15px";
visitBox.style.borderRadius = "15px";
visitBox.style.color = "white";
visitBox.style.textAlign = "center";
visitBox.style.zIndex = "999";

document.body.appendChild(visitBox);

/* ===========================================
   LIVE CLOCK
=========================================== */

const clock = document.createElement("div");

clock.style.position = "fixed";
clock.style.right = "20px";
clock.style.top = "90px";
clock.style.background = "#111";
clock.style.padding = "15px";
clock.style.borderRadius = "12px";
clock.style.color = "#00bfff";
clock.style.fontWeight = "600";
clock.style.zIndex = "999";

document.body.appendChild(clock);

setInterval(() => {

clock.innerHTML = new Date().toLocaleTimeString();

},1000);

/* ===========================================
   RANDOM BACKGROUND GRADIENT
=========================================== */

const colors = [

"#ff003c",

"#00bfff",

"#8A2BE2",

"#ff6600"

];

setInterval(()=>{

const color = colors[Math.floor(Math.random()*colors.length)];

document.body.style.background =
`radial-gradient(circle at top, ${color}22, #050505 70%)`;

},7000);

/* ===========================================
   NEWS POPUP
=========================================== */

setTimeout(()=>{

const popup=document.createElement("div");

popup.innerHTML=`

<h2>🔥 Breaking News</h2>

<p>

New movie updates are expected soon!

</p>

<button id="closeNews">

Close

</button>

`;

popup.style.position="fixed";

popup.style.left="50%";

popup.style.top="50%";

popup.style.transform="translate(-50%,-50%)";

popup.style.background="#111";

popup.style.padding="40px";

popup.style.borderRadius="20px";

popup.style.boxShadow="0 0 40px red";

popup.style.textAlign="center";

popup.style.zIndex="99999";

document.body.appendChild(popup);

document.getElementById("closeNews").onclick=()=>{

popup.remove();

}

},5000);

/* ===========================================
   IMAGE PARALLAX
=========================================== */

window.addEventListener("scroll",()=>{

document.querySelectorAll(".gallery img").forEach(img=>{

const speed=window.scrollY*0.03;

img.style.transform=`translateY(${speed}px)`;

});

});

/* ===========================================
   NEWS AUTO UPDATE
=========================================== */

const headlines=[

"🎬 New teaser expected this month",

"🎥 Behind-the-scenes photos released",

"⭐ Cast interview coming soon",

"🔥 Fans predict surprise villain reveal",

"📅 Production enters final stage"

];

const newsTitle=document.querySelector(".card h2");

let newsIndex=0;

setInterval(()=>{

newsTitle.innerHTML=headlines[newsIndex];

newsIndex++;

if(newsIndex>=headlines.length){

newsIndex=0;

}

},5000);

/* ===========================================
   END
=========================================== */

console.log("Brand New Day Website Loaded Successfully");
