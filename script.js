const timer = document.getElementById("stopwatch");
let hr = 0, min = 0, sec = 0;
let stoptime = true;

function startTimer() {
    if (stoptime) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
    stoptime = true;
}

function timerCycle() {
    if (!stoptime) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec += 1;

        if (sec == 60) {
            min += 1;
            sec = 0;
        }
        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
        }

        sec = sec < 10 ? "0" + sec : sec;
        min = min < 10 ? "0" + min : min;
        hr = hr < 10 ? "0" + hr : hr;

        timer.innerHTML = hr + ":" + min + ":" + sec;
        setTimeout(timerCycle, 1000);
    }
}

function resetTimer() {
    hr = 0; min = 0; sec = 0;
    stoptime = true;
    timer.innerHTML = "00:00:00";
}
