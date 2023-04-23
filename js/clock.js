const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('min-hand');
const hourHand = document.getElementById('hour-hand');
const digital = document.querySelector(".numericalClock .time");

export function setSeconds(){
    let second = new Date().getSeconds();
    const secDeg = (second / 60 * 360) + 90;
    secondHand.style.transform = `rotate(${secDeg}deg)`;
    return second;
}
export function setMinutes(){
    let minute = new Date().getMinutes();
    const minDeg = (minute / 60 * 360) + 90;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    return minute;
}
export function setHours(){
    let minute = new Date().getMinutes();
    let hour;
    if (minute >= 0 && minute < 10){
        hour = new Date().getHours();
    } else if (minute >= 10 && minute < 20) {
        hour = new Date().getHours() + 0.2;
    } else if (minute >= 20 && minute < 30) {
        hour = new Date().getHours() + 0.4;
    } else if (minute >= 30 && minute < 40) {
        hour = new Date().getHours() + 0.6;
    } else if (minute >= 40 && minute < 50) {
        hour = new Date().getHours() + 0.8;
    } else if (minute >= 50 && minute <= 59) {
        hour = new Date().getHours() + 1;
    }

    const hourDeg = (hour / 12 * 360) + 90;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    return hour;
}

export function digitalTime(){
    const time = new Date();
    const clock = {
        hour : time.getHours().toString().padStart(2,'0'),
        minute : time.getMinutes().toString().padStart(2,'0'),
        second : time.getSeconds().toString().padStart(2,'0')
    }

    digital.textContent = `${clock.hour}:${clock.minute}:${clock.second}`;
}