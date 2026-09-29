const no = document.getElementById("no");

no.addEventListener("mouseover",()=>{

let x=Math.random()*400-200;
let y=Math.random()*200-100;

no.style.transform=`translate(${x}px,${y}px)`;

});

function iniciar(){

document.getElementById("musica").play();

document.getElementById("inicio").style.display="none";

document.getElementById("corazonSection").style.display="flex";

setTimeout(()=>{

document.getElementById("pregunta").style.display="block";

},2500);

}

function aceptar(){

document.getElementById("corazonSection").style.display="none";

document.getElementById("final").style.display="flex";

lluvia();

}

function lluvia(){

for(let i=0;i<300;i++){

setTimeout(()=>{

const item=document.createElement("div");

item.className="lluvia";

item.innerHTML=Math.random()>0.5 ? "❤️" : "🌹";

item.style.left=Math.random()*100+"vw";

item.style.animationDuration=
(4+Math.random()*4)+"s";

document.body.appendChild(item);

setTimeout(()=>{
item.remove();
},8000);

},i*40);

}

}