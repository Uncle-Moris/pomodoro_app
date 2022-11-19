"use strict";

const btnStart = document.querySelector('.timer__btn-start')
const btnStop = document.querySelector('.timer__btn-start')
const btnBrake = document.querySelector('.timer__btn-brake')

const display = document.querySelector('.timer__display-text')


const footerYear = document.querySelector('.footer span')
footerYear.textContent = `${new Date().getFullYear()}`


let countTime;
let minutes = 25;
let seconds = 0;
display.textContent = `${minutes}:0${seconds}`

const timerStart = () => {
    countTime = setInterval(() => {
        if (seconds === 0) {
            minutes--
            seconds = 59
            display.textContent = `${minutes}:${seconds}`
        } else if (seconds <= 59 && seconds > 9) {
            seconds--
            display.textContent = `${minutes}:${seconds}`
        } else if (seconds <= 9) {
            seconds--
            display.textContent = `${minutes}:0${seconds}`
        } else if (minutes === 0 && seconds === 0 ) {
            clearInterval(countTime)
        }
    }, 100)

}



btnStart.addEventListener('click', timerStart)

