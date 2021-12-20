const secondsContainer = document.querySelector('.second')
const minutesContainer = document.querySelector('.minute')
const hoursContainer = document.querySelector('.hour')
const daysContainer = document.querySelector('.day')


const nextYear = new Date().getFullYear() + 1
const futureHour = new Date(`January 02 ${nextYear} 00:00:00`)

const updateCountdown = () => {
  const currentTime = new Date()
  const difference = futureHour - currentTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  const minutes = Math.floor(difference / 1000 / 60) % 60
  const seconds = Math.floor(difference / 1000) % 60

  secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
  minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
  hoursContainer.textContent = hours < 10 ? '0' + hours : hours
  daysContainer.textContent = days < 10 ? '0' + days : days

}

setInterval(updateCountdown, 1000)