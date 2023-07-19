//252  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(n){
    return "("+`${n[0]}`+`${n[1]}`+`${n[2]}`+")"+" "+`${n[3]}`+`${n[4]}`+`${n[5]}`+"-"+`${n[6]}`+`${n[7]}`+`${n[8]}`+`${n[9]}`;
  }

//253  Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.

function oddOrEven(array) {
  let sum =0;
  array.forEach(function(el){
    sum+=el
  });
  if (sum%2 == 0) return "even";
  else return 'odd';
}

//254

function divisors(integer) {
  let arr = [];
  for (let i = 2; i< integer; i++){
    if( integer%i == 0){
      arr.push(i);
    } else continue;
  }
  if (arr.length == 0){
    return `${integer} is prime`;
  } else return arr;
  
};

//255   moves all of the zeros to the end

function moveZeros(arr) {
  let arr1 = [];
  let arr2 = [];
  for ( let i = 0; i< arr.length; i++){
    if(arr[i] !== 0){
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  return arr1.concat(arr2);
}