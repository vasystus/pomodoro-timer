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
