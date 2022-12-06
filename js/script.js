window.onload = function (){
var intervals;
var appendtens = document.getElementById("tens");
var appendseconds = document.getElementById("seconds");
var buttonStart = document.getElementById("start");
var buttonStop = document.getElementById("stop");
var buttonResume = document.getElementById("reset");
var tens = 0;
var seconds = 0;
buttonStart.onclick = function(){
        intervals = setInterval(startTimer,10);
    };
buttonStop.onclick = function(){
        clearInterval(intervals);
    }
buttonResume.onclick  = function(){
        clearInterval(intervals);
        tens = 0;
        seconds = 0;
        appendtens.innerHTML = "00";
        appendseconds.innerHTML = "00";
    }
function startTimer(){
    tens++;
    if(tens <= 9){
        appendtens.innerHTML= "0" + tens;
    }
    if(tens > 9){
        appendtens.innerHTML = tens;
    }
    if(tens > 99){
        appendtens.innerHTML = "00";
        tens = 0;
        seconds ++;
        appendseconds.innerHTML = "0" + seconds;
    }
    if(seconds > 9){
        appendseconds.innerHTML = seconds;
    }
}
}