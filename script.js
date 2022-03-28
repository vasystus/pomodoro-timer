const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const workMins = document.getElementById("work_mins");
const workSecs = document.getElementById("work_secs");

const breakMins = document.getElementById("br_mins");
const breakSecs = document.getElementById("br_secs");

//store a reference to a timer variable
let startTimer;
start.addEventListener("click", function() {
 if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
 } else {
   alert("Timer is already running");
 }
});

// reset all functions
reset.addEventListener("click",function() {
  workMins.innerText = 25;
  workSecs.innerText = 00;

  breakMins.innerText = 5;
  breakSecs.innerText = 00;
  document.getElementById("counter").innerText = 0;
  stopInterval()
  startTimer = undefined;
})

stop.addEventListener("click", function() {
  stopInterval()
  startTimer = undefined;
})

// start timer function
function timer() {

//work timer countdown
  if (workSecs.innerText != 0) {
    workSecs.innerText --;
  } else if (workMins.innerText != 0 && workSecs.innerText == 0) {
    workSecs.innerText = 59;
    workMins.innerText --;
  }

//break timer countdown
  if (workMins.innerText == 0 && workSecs.innerText == 0) {
    if(breakSecs.innerText != 0){
      breakSecs.innerText--;
  } else if(breakMins.innerText != 0 && breakSecs.innerText == 0){
      breakSecs.innerText = 59;
      breakMins.innerText--;
    }
  }
// increment counter by one if one cycle is completed
  if(workMins.innerText == 0 && workSecs.innerText == 0 && breakMins.innerText == 0 && breakSecs.innerText == 0) {
    workMins.innerText = 25;
    workSecs.innerText = 00;

    breakMins.innerText = 5;
    breakSecs.innerText = 00;

    document.getElementById("counter").innerText++;
  }
}
//stop timer function
function stopInterval() {
  clearInterval(startTimer);
}
