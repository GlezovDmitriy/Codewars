// write the function isAnagram
var isAnagram = function(test, original) {
let one = test.toLowerCase().split('').sort().toString()
let two = original.toLowerCase().split('').sort().toString()
    return(one === two)
};

console.log(isAnagram("foefet", "toffee"))