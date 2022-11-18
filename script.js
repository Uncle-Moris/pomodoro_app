"use strict";


const footerYear = document.querySelector('.footer span')
footerYear.textContent = `${new Date().getFullYear()}`


const btnAll= document.querySelectorAll('.timer__btn')

btnAll.forEach(e => {
  e.addEventListener('click',  element =>{
    if (e.classList.contains('active'))  {
      e.classList.toggle('active')
    }
  })
})




