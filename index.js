
const f = (str)=>{
    let arr = str.split('');
    console.log(arr)
    let newArr = []
    for (let i = 0; i < arr.length; i++){
         (arr[i-1] === ' '
             ? newArr.push(arr[i].toUpperCase())
             : newArr.push(arr[i]))
    }
    console.log(newArr)
   return newArr.join('');
}
console.log( f ("How can mirrors be real if our eyes aren't real"))
