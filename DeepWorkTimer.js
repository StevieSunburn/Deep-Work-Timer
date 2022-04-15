let output = document.getElementById("time");
let minutes = document.getElementById("session");

output.innerHTML = minutes.innerHTML+":00";


function upBreak(){
  let breakLength = document.getElementById("break")
  let numberB = parseInt(breakLength.innerHTML)
  breakLength.innerHTML = numberB + 1;
  if (breakLength.innerHTML < 10){
    breakLength.innerHTML = "0" + breakLength.innerHTML;
  }
}

function downBreak(){
  let breakLength = document.getElementById("break")
  let numberB = parseInt(breakLength.innerHTML)
  if (numberB < 1){ 
  }else {
  breakLength.innerHTML = numberB - 1;
  if (breakLength.innerHTML < 10){
    breakLength.innerHTML = "0" + breakLength.innerHTML;
  }
  }
 }


function upSession(){
  let sessionLength = document.getElementById("session")
  let numberS = parseInt(sessionLength.innerHTML)
  sessionLength.innerHTML = numberS + 1;
  if (sessionLength.innerHTML < 10){
    minutes.innerHTML = "0" + sessionLength.innerHTML;
  }
  output.innerHTML = minutes.innerHTML+":00";
}


function downSession(){  
  let sessionLength = document.getElementById("session")
  let numberS = parseInt(sessionLength.innerHTML)
  if (numberS < 1){ 
  } else {
  sessionLength.innerHTML = numberS - 1;
  if (sessionLength.innerHTML < 10){
    minutes.innerHTML = "0" + sessionLength.innerHTML;
  }
  output.innerHTML = minutes.innerHTML+":00";
  }
}

const WHAT = ["Session", "Break"];
let i = 0;

function reset(){
  let timer = document.getElementById("time");
  timer.innerHTML = minutes.innerHTML + ":00"
  document.getElementById("now").innerHTML = WHAT[0];
  clearInterval(intervalID);
  document.getElementById("play").style.visibility = "visible";
};

function start(){
  document.getElementById("play").style.visibility = "hidden";
  let minutesSession = parseInt(document.getElementById("session").innerHTML) - 1;
  let seconds = 60;
  let output = document.getElementById("time");
  document.getElementById("now").innerHTML = WHAT[i];
  intervalID = setInterval(() =>{
    seconds--;
    if (seconds < 10){
    seconds = "0" + seconds
    };
    output.innerHTML = minutesSession + ":" + seconds;
    if (seconds == 0){
      minutesSession--;
      seconds = 60;
    }
    if (minutesSession < 0){
      clearInterval(intervalID);
      breakStart();
    }
    }, 1000);
};

function breakStart(){
  document.getElementById("now").innerHTML = WHAT[1];
  let minutesSession = parseInt(document.getElementById("break").innerHTML) - 1;
  let seconds = 60;
  let output = document.getElementById("time");
  let minuteOutput = minutesSession + 1;
  output.innerHTML = minuteOutput+":00";
  intervalID = setInterval(() =>{
    seconds--;
    if (seconds < 10){
    seconds = "0" + seconds
    };
    output.innerHTML = minutesSession + ":" + seconds;
    if (seconds == 0){
      minutesSession--;
      seconds = 60;
    }
    if (minutesSession < 0){
      clearInterval(intervalID);
    }
    }, 1000);
}