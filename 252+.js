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

//263  возвращает это единственное другое число.

function stray(num) {
  num.sort();
  if (num[0] !== num[1] && num[0] !== num[2]){
    return num[0];
  } else return num[num.length-1];
  
}

//264 CРАВНЕНИЕ ДАТ

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
let moment = require('moment');
let t1 = new moment(currentDate);
let t2 = new moment(expirationDate);
  if( enteredCode === correctCode && t1 <= t2){
    return true;
  } else return false;
}

//265

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

//266

function isValidWalk(walk) {
  let n = walk.filter(item => item === 'n').length;
  let s = walk.filter(item => item === 's').length;
  let w = walk.filter(item => item === 'w').length;
  let e = walk.filter(item => item === 'e').length;
  if ( walk.length == 10 && n == s && w == e) return true;
  else return false;
}

//267  Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти!

function findUniq(arr) {
  arr.sort();
   if(arr[0] !== arr[1]) return arr[0];
   else return arr[arr.length-1];
 }
 
//268

function maxMin(arr1,arr2){
  let arr = [];
  for (let i =0; i< arr1.length; i++){
    arr.push(Math.abs(arr1[i]-arr2[i]));
  }
  return [Math.max(...arr), Math.min(...arr)];
  
}
//269

function blackAndWhite(arr){
  if( Array.isArray(arr) !== true) return "It's a fake array";
  else if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1){
    return "It's a black array";
  } else return "It's a white array";
}

//270

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let sum = 0;
  for (let i =0; i< arr.length; i++){
    if (arr[i] == ':)' || arr[i] == ';)'||
       arr[i] == ':-)'|| arr[i] == ';~)' ||
       arr[i] == ':D' || arr[i] == ';D' ||
       arr[i] == ':-D' || arr[i] == ';~D' ||
       arr[i] == ':~D' || arr[i] == ':~)' ||
       arr[i] == ';-D' || arr[i] == ';-)'){
      sum+= 1;
    }
    else continue;
  }
  return sum;
}

//271

function bouncingBall(h,  bounce,  window) {
  if( h < 0 || bounce <= 0 || bounce >= 1 || window >= h){
    return -1;
  }
  let x = h*bounce;
  let count = 1;
  if (x <= window){
    return count;
  }
  while (x >= window){
    x*= bounce;
    count+= 2;
  } return count;
  
}

//272 чтобы функция разбивала верблюжий регистр, используя пробелы между словами.

// complete the function
function solution(string) {
  let str = '';
  for (let i =0; i< string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      str+=' ' + string[i];
    } else str+= string[i];
  }
    return str;
}

//273  секунды) в качестве входных данных и возвращает время в удобочитаемом формате ( HH:MM:SS)

function humanReadable (seconds) {
  let HH = Math.floor(seconds / 60 / 60);
  let MM = Math.floor(seconds / 60) - (HH * 60);
  let SS = seconds % 60;
  let time = [
      HH.toString().padStart(2, '0'),  // заполнение строки слева, до длины 2, 0 - то что добавляется
      MM.toString().padStart(2, '0'),
      SS.toString().padStart(2, '0')
      ].join(':');
   return time;
}

//274   заменить каждую букву ее позицией в алфавите.

function alphabetPosition(text) {
  let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
              'n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let arr1 =[];
  let arr = text.toLowerCase().split('');
  for (let i = 0; i<arr.length; i++){
    if( arr[i] == ' ' || alph.indexOf(arr[i]) == -1){
      continue;
    } else {
      arr1.push(alph.indexOf(arr[i])+1);
    }
    
  }
  let str = arr1.join(' ');
  return str;
}
 
//275  The Hashtag Generator  5kyu

function generateHashtag (str) {
  str = str.replace(/ +/g, ' ').trim();   // убираем все лишние пробелы
   let arr = str.split('');
   let arr1 = ['#'];
   if (str == '' || str.length >= 140 || str == '#') return false;
   for (let i = 0; i<arr.length; i++){
     if ( arr[0] == arr[0].toLowerCase()){
       arr[0] = arr[0].toUpperCase();
       arr1.push(arr[0]);
     } else if( arr[i] == ' '){
       arr[i+1] = arr[i+1].toUpperCase();
       continue;
     } else {
       arr1.push(arr[i]);
     }
   }
   let string = arr1.join('');
   return string;
 }