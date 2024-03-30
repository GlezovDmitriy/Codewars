function cookingTime(neededPower, minutes, seconds, power) {
    let nP = neededPower.substring(0, neededPower.length - 1)
    let p = power.substring(0, power.length - 1)
    let timeInSeconds = p * (minutes * 60 + seconds) / nP;
    let timeRound = Math.ceil(timeInSeconds);
    let min = Math.floor(timeRound / 60)
    let sec = timeRound - (min * 60)
    return `${min} minutes ${sec} seconds`
}

console.log(cookingTime("600W", 4, 20, "800W"))

/*
let a = "600W"
let s = a.substring(0, a.length-1)
console.log(+s)
console.log(s)*/
