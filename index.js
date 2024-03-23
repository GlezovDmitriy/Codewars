
function minMax(arr){
    let maxValue = Math.max(...arr)
    let minValue = Math.min(...arr)
    console.log(minValue)
    console.log(maxValue)
    return [minValue,maxValue]; // fix me!
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(Math.min([1, 2, 3, 4, 5]))