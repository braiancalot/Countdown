// Modal
const btnAbrirModal = document.querySelector(".button-open")
const modal = document.querySelector(".modal-container")

function abrirModal(){
    modal.classList.add('active')
    modal.addEventListener('click', event => {
        console.log(event.target.className)
        if(event.target.className === 'button-close' || event.target.className === 'modal-container active'){
            modal.classList.remove('active')
        }
    })
}
btnAbrirModal.addEventListener('click', abrirModal)

// Timer
const daysDiv = document.querySelector(".days")
const hoursDiv = document.querySelector(".hours")
const minutesDiv = document.querySelector(".minutes")
const secondsDiv = document.querySelector(".seconds")
let timeLeftInSeconds = 100000
const SECONDS_IN_A_DAY = 24 * 60 * 60
const SECONDS_IN_A_HOUR = 60 * 60
const SECONDS_IN_A_MINUTE = 60

let days, hours, minutes, seconds, rest

setInterval(function () {
    days = Math.floor(timeLeftInSeconds / SECONDS_IN_A_DAY)
    rest = (timeLeftInSeconds % SECONDS_IN_A_DAY)

    hours = Math.floor(rest / SECONDS_IN_A_HOUR)
    rest = rest % SECONDS_IN_A_HOUR

    minutes = Math.floor(rest / SECONDS_IN_A_MINUTE)
    rest = rest % SECONDS_IN_A_MINUTE

    seconds = rest

    daysDiv.textContent = String(days).padStart(2, '0')
    hoursDiv.textContent = String(hours).padStart(2, '0')
    minutesDiv.textContent = String(minutes).padStart(2, '0')
    secondsDiv.textContent = String(seconds).padStart(2, '0')

    if(timeLeftInSeconds >= 1){
        timeLeftInSeconds -= 1
    }
}, 1000)




