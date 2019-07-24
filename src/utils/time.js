export const getTime = timestamp => {
  const date = new Date(timestamp)
  const hours = date.getHours()
  const minutes = `0${date.getMinutes()}`
  return `${hours}:${minutes.substr(-2)}`
}
