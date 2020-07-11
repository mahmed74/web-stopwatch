var min = 0;
var sec = 0;
var msec = 0;

var mindisplay = document.getElementById("min")
var secdisplay = document.getElementById("sec")
var msecdisplay = document.getElementById("msec")

var interval;

function timer() {
    msec++
    msecdisplay.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secdisplay.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++
        mindisplay.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);
}

function pause() {
    clearInterval(interval)
}

function reset() {
    msec = 0;
    sec = 0;
    min = 0;
    msecdisplay.innerHTML = msec;
    secdisplay.innerHTML = sec;
    mindisplay.innerHTML = min;
    clearInterval(interval);
}

function disable() {
    document.getElementById('btns').disabled = true;
}

function enable() {
    document.getElementById('btns').disabled = false;
}