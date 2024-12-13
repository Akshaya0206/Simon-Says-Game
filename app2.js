let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let highestscore=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
       if(started==false){
        console.log("game started");
          started=true;
          levelup();
       }
});


function check(idx){
    if(gameseq[idx]===userseq[idx]){
        if(userseq.length==gameseq.length){
            levelup();
        } 
    }
    else{
        if(level>highestscore){
            highestscore=level;
        }
        h2.innerHTML=`Game over! your score was ${level} press any key to start <br> <b>Your highest score is ${highestscore}</b>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
     userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randinx=Math.floor(Math.random()*3);
    let randcolor=btns[randinx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function btnpress(){
    let btn=this;
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    userflash(btn);
    check(userseq.length-1);
}
 let btnall=document.querySelectorAll(".btn");
 for(btn of btnall){
    btn.addEventListener("click",btnpress);
 }
 function reset(){
    userseq=[];
    gameseq=[];
    level=0;
    started=false;
 }
