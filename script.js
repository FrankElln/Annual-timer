const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "January 1, 2022";

function counting() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); //remaining amount for the year
    const hours = Math.floor(totalSeconds / 3600) % 24; //remaining amount for today
    const mins = Math.floor(totalSeconds / 60) % 60; //remaining amount for current hour
    const seconds = Math.floor(totalSeconds) % 60; //current time

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

//allows zeros to be displayed
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

counting();

setInterval(counting, 1000);