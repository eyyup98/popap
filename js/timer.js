let popup = document.getElementById("popup");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");

document.addEventListener("DOMContentLoaded", ready);

buttonRun.addEventListener('click', function() {
    seconds -= 10
})

function ready() {
    seconds = 59;
    timer = setInterval(function () {
        if (seconds <= 0) {
            clearInterval(timer);
            popup.style.display = 'flex';
        } else {
            if (seconds > 9) {
                timerShow.innerHTML = `00:${seconds}`;
            } else {
                timerShow.innerHTML = `00:0${seconds}`;
            }
        }
        --seconds;
    }, 1000)
}

function exit() {
    popup.style.display = 'none';
    timerShow.textContent = '01:00'
    ready();
}