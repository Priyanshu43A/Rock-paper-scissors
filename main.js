//getting all html elements
let doc = document;
let body = document.querySelector("body");
let headings = doc.querySelectorAll("h1");
let images = document.querySelectorAll("img");
let divs = document.querySelectorAll("div");
let buttons = document.querySelectorAll("button");
let headingRock = headings[0];
let headingPaper = headings[1];
let headingScissor = headings[2];
let scoreBot = headings[3];
let scorePlayer = headings[4];

let imgBot = images[0];
let imgPlayer = images[1];
let imgRock = images[2];
let imgPaper = images[3];
let imgScissor = images[4];
let divBot = divs[0];
let divScores = divs[1];
let divPlayerChoice = divs[2];
let divPlayerOption = divs[3];
let btnPlay = buttons[0];
let btnPlayAgain = buttons[1];
let para = doc.querySelector("p");
//stone paper scissors heading animation
async function countDown() {
  for (let i = 3; i > 0; i--) {
    if (i == 3) {
      headingRock.innerHTML = "Scissor";
      headingPaper.innerHTML = "Rock";
      headingScissor.innerHTML = "Paper"
    }
    if (i == 2) {
      headingRock.innerHTML = "Paper";
      headingPaper.innerHTML = "Scissor";
      headingScissor.innerHTML = "Rock";
    }
    if (i == 1) {
      headingRock.innerHTML = "Rock";
      headingPaper.innerHTML = "Paper";
      headingScissor.innerHTML = "Scissor";

    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  countDown();
}
countDown();

//making a function to choose randomly
let options;
options = ["Rock", "Paper", "Scissor"];

function chooseRandom() {
  var choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}
var botChoice = chooseRandom();

//user choice
let user;
let paper = options[1];
let scissors = options[2];
let rock = options[0];
//functionto show changing images
let srcRock = "rockk.png";
let srcPaper = "paperr.png";
let srcScissor = "scissor.png";
let srcAll = [srcRock, srcPaper, srcScissor];
let running;

function chngImgSrc() {
  var changed = srcAll[Math.floor(Math.random() * srcAll.length)];
  return changed;
};

let changedSrc = chngImgSrc();

 
 async function shuffle() {
   for (var i = 50; i > 0; i--) {
     if (i<=40 && i >=10 ) {
       let changedSrc = chngImgSrc();
    imgBot.src = changedSrc;
     }
     if (i==10) {
       imgBot.src = "pngaa.png";
     }
       await new Promise(resolve => setTimeout(resolve, 100));
   }
   
 };
 


//starting game before start
async function startGame() {
  
    shuffle();
  
  for (var i = 5; i > 0; i--) {
    
    if (i == 5) {
      para.innerHTML = "Starting.....";
      imgRock.setAttribute("onclick", "#");
      imgScissor.setAttribute("onclick", "#");
      imgPaper.setAttribute("onclick", "#");
      btnPlay.style.display = "none";
      btnPlayAgain.style.display = "none";
    }
    if (i == 4) {
      para.innerHTML = "Rock..";

    }
    if (i == 3) {
      para.innerHTML = "Paper..";

    }
    if (i == 2) {
      para.innerHTML = "Scissor..";

    }
    if (i == 1) {
      para.innerHTML = "Choose..";
      imgRock.setAttribute("onclick", "selectedRock()");
      imgScissor.setAttribute("onclick", "selectedScissor()");
      imgPaper.setAttribute("onclick", "selectedPaper()");
    }



    await new Promise(resolve => setTimeout(resolve, 1000));

  }
};

//getting bot image
function getImgBot() {
  if (botChoice == paper) {
    imgBot.src = srcPaper;
  }
  if (botChoice == scissors) {
    imgBot.src = srcScissor;
  }
  if (botChoice == rock) {
    imgBot.src = srcRock;
  }
};
//updating user value on click
let selectedRock = () => {
  
  user = rock;
  
  document.getElementById("player").style.display = "none";
  imgPlayer.src = "rockk.png";
  playGame();
  getImgBot();
};
let selectedPaper = () => {
  user = paper;
  document.getElementById("player").style.display = "none";

  imgPlayer.src = "paperr.png";

  playGame();
  getImgBot();
  divPlayerOption.classList.add("none");
};
let selectedScissor = () => {
  user = scissors;
  document.getElementById("player").style.display = "none";
  imgPlayer.src = "scissor.png";

  playGame();
  getImgBot();


};
//scores
let botScore = [];
let userScore = [];
//game logic
let playGame = () => {
  if (botChoice == user) {
             

    const tie = `It is tie! Both player choose ${user}.`;
    para.innerHTML = tie;
    btnPlay.style.display = "none";
    btnPlayAgain.style.display = "inline";
    

  } else if (botChoice == paper && user == scissors || botChoice == rock && user == paper || botChoice == scissors && user == rock) {
  
    const uWins = `You Won! ${user} takes over the ${botChoice}.`;
    userScore.push("win");
    botScore.pop();
    const finalScoreU = userScore.length;
    para.innerHTML = uWins;
    scorePlayer.style.backgroundColor = "green";
    scoreBot.style.backgroundColor = "red";
    scorePlayer.innerHTML = "You: " + finalScoreU;
    scoreBot.innerHTML = "Bot: " + botScore.length;
    btnPlay.style.display = "none";
    btnPlayAgain.style.display = "inline";

  } else if (botChoice == paper && user == rock || botChoice == rock && user == scissors || botChoice == scissors && user == paper) {
       

    const bWins = `You loose! ${botChoice} takes over the ${user}.`;
    botScore.push("win");
    userScore.pop();
    scorePlayer.style.backgroundColor = "red";
    scoreBot.style.backgroundColor = "green";
    const finalScoreB = botScore.length;
    scoreBot.innerHTML = "Bot: " + finalScoreB;
    scorePlayer.innerHTML = "You: " + userScore.length;
   
    
    para.innerHTML = bWins;
    btnPlay.style.display = "none";
    btnPlayAgain.style.display = "inline";
  }
};
 function checkWinner(){
if (botScore.lenght>=5) {
  para.innerHTML = "Bot Wons the Match! bot scores "+botScore.lenght+".";
}
if (userScore.lenght >= 1) {
  para.innerHTML = "You Wons the Match! You scores " + userScore.lenght + ".";
}
if (botScore.lenght==5 && userScore.lenght==5) {
  para.innerHTML = "Match got tie! Both scores "+userScore.lenght+".";
}
};


function next() {
  botChoice = chooseRandom();
  document.getElementById("player").style.display = "grid";
  imgBot.src = "pngaa.png";
  imgPlayer.src = "pngaa.png";
 startGame();
};
