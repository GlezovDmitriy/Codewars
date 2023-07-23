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

//256

var number=function(array){
  let arr =[];
  for(let i=0; i<array.length; i++){
    arr.push(`${i+1}: ${array[i]}`);
  }
  return arr;  
  
}

//257  Number of People in the Bus

var number = function(busStops){
  let count = 0;
  for (let i =0; i<busStops.length; i++){
      count += busStops[i][0];
    count -= busStops[i][1];
  }
  return count;
}

// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0); 

//258 разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 1x1 

function breakChocolate(n,m) {
  if( n <= 0 || m <=0 ) return 0;
  let count = n*m-1;
  return count;
}

//259

function removeUrlAnchor(url){
  let str ='';
  for (let i =0;i<url.length; i++){
    if (url[i] !== '#'){
      str+= url[i];
    }else break;
  }
  return str;
}

//260

var capitals = function (word) {
	let arr =[];
  for (let i=0; i<word.length; i++){
    if( word[i].toUpperCase() === word[i]){
      arr.push(i);
    } else continue;
  }
  return arr;
};

//261 возвращает сумму абсолютного значения каждой из десятичных цифр числа : 99 --> 18; 

function sumDigits(number) {
  let arr = [];
   let str = Math.abs(number).toString();
    for (let i=0; i<str.length; i++){
    arr.push(str[i]*1);
  }
  let sum = arr.reduce(function(acc, elem){
    return acc + elem;
  })
  
  return sum;
}

//262

function smallEnough(a, limit){
  for (let i =0; i< a.length; i++){
    if (a[i] > limit) {
      return false
    };  
  }; 
  return true;
}