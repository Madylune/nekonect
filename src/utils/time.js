export const getTime = timestamp => {
  const date = new Date(timestamp)
  const hours = date.getHours()
  const minutes = `0${date.getMinutes()}`
  return `${hours}:${minutes.substr(-2)}`
}

export const timeDifference = (date1, date2) => {
  const oneDay = 24 * 60 * 60 // hours*minutes*seconds
  const oneHour = 60 * 60 // minutes*seconds
  const oneMinute = 60 // 60 seconds
  const firstDate = date1.getTime() // convert to milliseconds
  const secondDate = date2.getTime() // convert to milliseconds
  let seconds = Math.round(Math.abs(firstDate - secondDate) / 1000) //calculate the diffrence in seconds
  // the difference object
  const difference = {
    "days": 0,
    "hours": 0,
    "minutes": 0,
    "seconds": 0,
  }
  //calculate all the days and substract it from the total
  while (seconds >= oneDay) {
    difference.days++
    seconds -= oneDay
  }
  //calculate all the remaining hours then substract it from the total
  while (seconds >= oneHour) {
    difference.hours++
    seconds -= oneHour
  }
  //calculate all the remaining minutes then substract it from the total 
  while (seconds >= oneMinute) {
    difference.minutes++
    seconds -= oneMinute
  }
  //the remaining seconds :
  difference.seconds = seconds;
  //return the difference object
  return difference
}
