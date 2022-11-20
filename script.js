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
display.textContent = `${minutes}:0${seconds}`

const timerStart = () => {
    clearInterval(countTime)
    minutes = 25
    seconds = 0
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
        } else if (minutes == 0 && seconds == 0 ) {
            clearInterval(countTime)
        }
    }, 100)

}

const timerBrake = () => {
    clearInterval(countTime)
    minutes = 5
    seconds = 0
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
        } else if ((seconds === 0 && minutes === 0)
            || display.value === '0:00'
            || display.textContent === '0:00') {
            console.log('stop')
            clearInterval(countTime)
        }
        console.log(minutes, seconds)
    }, 1000)
}

const timerStop = () => {
    clearInterval(countTime)
}


btnStart.addEventListener('click', timerStart)
btnStop.addEventListener('click', timerStop)
btnBrake.addEventListener('click', timerBrake)
