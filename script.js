"use strict";

const btnStart = document.querySelector('.timer__btn-start')
const btnStop = document.querySelector('.timer__btn-stop')
const btnBrake = document.querySelector('.timer__btn-brake')

const display = document.getElementById('timer')


const footerYear = document.querySelector('.footer span')
footerYear.textContent = `${new Date().getFullYear()}`


let countTime;
let minutes = 25;
let seconds = 0;
display.textContent = `${25}:0${0}`

const timer = (min, sec) => {
    display.textContent = `${min}:0${sec}`
    clearInterval(countTime)
    minutes = min
    seconds = sec
    countTime = setInterval(() => {
        if (display.textContent === '0:00') {
            clearInterval(countTime)

            console.log( minutes, seconds)
        } else if (sec === 0) {
            min--
            sec = 59
            display.textContent = `${min}:${sec}`
        } else if (seconds <= 59 && sec > 9) {
            sec--
            display.textContent = `${min}:${sec}`
        } else if (sec <= 9) {
            sec--
            display.textContent = `${min}:0${sec}`
        }
    }, 1000)
}


const timerStop = () => {
    clearInterval(countTime)
}


btnStart.addEventListener('click', () => timer(25,0))
btnBrake.addEventListener('click', () => timer(5,0))
btnStop.addEventListener('click', timerStop)


let userTime = Date('0 0 25 0');
const setTime = () => {
    let currentTime = new Date()

    cnst
}
const m = new Date().mi
setInterval(setTime, 1000)