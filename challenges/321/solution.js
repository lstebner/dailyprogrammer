const ONES = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
}
const TEENS = {
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
}
const BASES = {
  10: "ten",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
}

const SPACE = " "
const OH = "oh" + SPACE
const OCLOCK = "o'clock"
const HUNDRED = "hundred"

const wordForNumber = (num) => {
  if (num < 10) {
    return ONES[num]
  } else if (num > 10 && num < 20) {
    return TEENS[num]
  } else if (num % 10 === 0) {
    return BASES[num]
  } else {
    let base = Math.floor(num / 10)
    return wordForNumber(base * 10) + SPACE + wordForNumber(num % 10)
  }
}

const wordsForHours = (hours, useMilitary = false) => {
  let hoursWord = wordForNumber(hours)

  if (useMilitary) {
    if (hours < 10) {
      return OH + hoursWord
    }

    hours = wordForNumber(Math.floor(hours / 10)) + SPACE + wordForNumber(hours % 10)
  }

  return hoursWord
}

const wordsForMinutes = (minutes, useMilitary = false) => {
  if (minutes === 0) {
    return useMilitary ? HUNDRED : OCLOCK
  }

  if (minutes < 10) {
    return OH + wordForNumber(minutes)
  } else if (useMilitary) {
    return wordForNumber(Math.floor(minutes / 10)) + SPACE + wordForNumber(minutes % 10)
  }

  return wordForNumber(minutes)
}

const solution = (theTime, useMilitary = false) => {
  const timePieces = theTime.split(":")
  let hours = parseInt(timePieces[0])
  const minutes = parseInt(timePieces[1])
  const isMorning = hours < 12
  let timeString = ""

  if (hours > 12 && !useMilitary) hours -= 12

  timeString = `It is ${wordsForHours(hours, useMilitary)} ${wordsForMinutes(minutes, useMilitary)}`

  if (!useMilitary) {
    timeString += SPACE + (isMorning ? "am" : "pm")
  }

  if (window && window.speechSynthesis) {
    window.speechSynthesis.speak(timeString)
  }

  return timeString
}

module.exports = solution
