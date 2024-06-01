let userSeq  = [];
let gameSeq = [];

let started = false;
let level = 0;

let colors = ["red", "green", "yellow", "blue"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*4);
    let randColor = colors[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
    gameSeq.push(randColor);
}

let btns = document.querySelectorAll(".box");
for(btn of btns){
    btn.addEventListener("click", btnPress);
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    let btnId = btn.getAttribute("id");
    userSeq.push(btnId);
    checkAns(userSeq.length-1);
}
function checkAns(indx){
    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            levelUp();
        }
    }
    else{
        h2.innerHTML = `Game is Over..! At level-${level} <br> Press any key to continue`;
        resetGame();
    }
}
function resetGame(){
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}