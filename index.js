function twoOldestAges(ages){
   return ages.sort((a,b)=>a-b).slice(ages.length-2,ages.length)
}

console.log(twoOldestAges([3, 1, 2, 10, 4, 7]))
console.log(twoOldestAges([3, 1, 2, 1, 4, 7]))
console.log(twoOldestAges([30, 1, 2, 1, 14, 7]))
