export const getPlural = (number, count, letterToAdd) => {
  return number > count ? letterToAdd : ''
}
