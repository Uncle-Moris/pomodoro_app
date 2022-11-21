"use strict";

const btnStart = document.querySelector('.timer__btn-start')
const btnStop = document.querySelector('.timer__btn-stop')
const btnBrake = document.querySelector('.timer__btn-brake')

const display = document.querySelector('#timer')


const footerYear = document.querySelector('.footer span')
footerYear.textContent = `${new Date().getFullYear()}`


let countTime;
let minutes = 2;
let seconds = 0;
display.textContent = `${minutes}:0${seconds}`

const timerStart = () => {
    clearInterval(countTime)
    minutes = 2
    seconds = 0
    countTime = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            timerBrake()
        } else if (seconds === 0) {
            minutes--
            seconds = 59
            display.textContent = `${minutes}:${seconds}`
        } else if (seconds <= 59 && seconds > 9) {
            seconds--
            display.textContent = `${minutes}:${seconds}`
        } else if (seconds <= 9) {
            seconds--
            display.textContent = `${minutes}:0${seconds}`
        }
    }, 10)
    if (minutes === 0 && seconds === 0) {
        clearInterval(countTime)
    }
}

const timerBrake = () => {
    clearInterval(countTime)
    minutes = 1
    seconds = 0
    countTime = setInterval(() => {

        if (minutes === 0 && seconds === 0) {
            clearInterval(countTime)
        } else if (seconds === 0) {
            minutes--
            seconds = 59
            display.textContent = `${minutes}:${seconds}`
        } else if (seconds <= 59 && seconds > 9) {
            seconds--
            display.textContent = `${minutes}:${seconds}`
        } else if (seconds <= 9) {
            seconds--
            display.textContent = `${minutes}:0${seconds}`
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

