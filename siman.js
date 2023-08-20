let gameSeq = [];
let userSeq = [];


let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {

    if (started == false ) {
        console.log("game is Startd");
        started = true;

        levelUp();

    }
});

function gameFlash(btn)  {
    btn.classList.add("Flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    }, 250);
}

function userFlash(btn)  {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");

    },250);

}    

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = math.floor(math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
   // console.log(randIdx);
   // console.log(randColor);
   // console.log(randBtn);//
   gameSeq.puch(randColor);
   console.log(gameSeq);
    gameFlash(randBtn);

}


function checkans()  { 
 let idx = level -1;

 if (userSeq[idx] === gameSeq[idx]) {
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
    }
  }else {
    h2.innerText = `Game Over! Press any Key to Start. `;

  }
   
 
}


function btnpress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor); 

    checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click",btnpress);

}