
window.addEventListener("load",init);

// global variables

const levels = {
    "easy": 15,
    "medium": 3,
    "difficult": 2
}

function getSeconds(){
  return document.getElementById("seconds").innerText;
}

function printSeconds(num){
return document.getElementById("seconds").innerText = num;
}

var  level = document.getElementsByClassName("level");

for(var i=0; i<level.length; i++){
level[i].addEventListener("click", function(){
  if(level!=NaN){
  level = this.id;
  printSeconds(level) ;
  } 

})
}
 

const selectedLevel = levels.easy;
let time = selectedLevel;
let score = 0;
let isPlaying; 


const workingTime = document.querySelector("#seconds");
const popUpWord = document.querySelector("#current-word");
const getScore = document.querySelector("#score");
const remainingTime = document.querySelector("#left-time");
const getInfo= document.querySelector("#message");
const getInputWord = document.querySelector("#word-input");
const getReflesh = document.querySelector("#reflesh");
const machingInfo= document.querySelector("#message-prime");


const words = ["Thierry", "Kamali","Jado", "Evelyn","Kepler", "Beans", "Niyokwizera","Bosco","Mugumyankiko", "Honore","Bujepa", "Jean Pierre", "Ntirandekura"];

function init(){

    // (1) getting the current words function inside init
   
getCurentWord(words);

// (4) matching what we write in input with the pop Up word;
getInputWord.addEventListener("input", startMaching);

// (2) call  countdown every second;
setInterval(countdown, 1000);

//(3) check if the game still going or over

setInterval(info, 50);
}



//(1) getting the word from the array
function getCurentWord(words){
const randomWord = Math.floor(Math.random() * words.length);
popUpWord.innerHTML = words[randomWord];
}

// (2) get remaining time

function countdown(){
    if(time > 0){
    time--;
    } else if(time===0){
     isPlaying = false;
    }
remainingTime.innerHTML = time;  
    
}

//(3) to find if the game still going or not
function info(){
    if(!isPlaying && time ===0){
     getInfo.innerHTML = "Stop";
     machingInfo.innerHTML = "";
     score = -1;
    } else if(time > 0){
    getInfo.innerHTML = "";
    }

}

//(4 a) start matching function

function startMaching(){
if(machWords()){
  isPlaying = true;
  //to add 1 second for the page load,
  time = selectedLevel +1;
  // to call the getCurrentWord function to get another word;
  getCurentWord(words);

  //to clear the input 
  getInputWord.value = "";
  // to increment on the score;
  score++;

}
if(score === -1){
getScore.innerHTML = 0;
} else{
getScore.innerHTML = score;
}
}
//(4 b) machWords function;

function machWords(){
  if(getInputWord.value ===popUpWord.innerHTML){
    machingInfo.innerHTML = "Correct";
     return true;
  }else{
      matchingInfo.innerHTML = "";
      return false;
  }
}