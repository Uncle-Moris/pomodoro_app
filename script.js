"use strict";

const btnStart = document.querySelector('.timer__btn-start')
const btnStop = document.querySelector('.timer__btn-start')
const btnBrake = document.querySelector('.timer__btn-brake')

const display = document.querySelector('.timer__display-text')




const footerYear = document.querySelector('.footer span')
footerYear.textContent = `${new Date().getFullYear()}`


const btnAll= document.querySelectorAll('.timer__btn')

const n1 = '1'
const n2 = '2'
const n3 = '3'
const n4 = '4'


display.textContent = `${n1}${n2}:${n3}${n4}`


