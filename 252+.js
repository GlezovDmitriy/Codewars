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

//276

function race(v1, v2, g) {
  if (v1 > v2) return null;
  let time = g/(v2-v1)*60*60;
  let h = Math.floor(time/60/60);
  let m = Math.floor((time - h*60*60)/60);
  let s = Math.floor(time - h*60*60 - m*60);
  return [h, m, s]
 }

//277

function dashatize(num) {
  if ( Number.isNaN(num) == true) return 'NaN';
  let arr = num.toString().split('');
  let array = [];
    for (i=0; i< arr.length; i++){
    if (arr[i] == '-') continue;
    else if ( arr[i] % 2 == 0){
      array.push(arr[i]);
    } else if (arr[i] % 2 !== 0){
      array.push('-'+ arr[i] + '-');
    }
  }
  let newArr = array.join('').split('');
  
  if (newArr[0] == '-'){
    newArr.shift();
  }  
  
  if ( newArr[newArr.length - 1] == '-'){
    newArr.pop();
  }
  
  let result = [];
  for (j=0; j<newArr.length; j++){
    if (newArr[j] == '-' && newArr[j+1] == '-') continue;
    else 
      result.push(newArr[j]);
  }
  
  return result.join('');
}

//278 которая проверяет, имеют ли два массива «одинаковые» элементы с одинаковыми кратностями

function comp(array1, array2){
  if (array1 == [] || array2 == []
     || array1 == null || array2 == null){
    return false;
  }
  array1.sort(function sorter(a,b){return (a-b)});
  array2.sort(function sorter(a,b){return (a-b)});
  for (let i = 0; i < array1.length; i++){
    if ( Math.pow(array1[i], 2) == array2[i]) continue;
    else return false;
  }
  return true;
}
//279 Сумма без наибольшего и наименьшего числа
function sumArray(arr) {
  if (arr === null || arr === undefined ) return 0;
  let maxV = Math.max(...arr);
  let minV = Math.min(...arr);
  let sum = 0;
  for (let i=0; i<arr.length; i++){
    sum+= arr[i];
  }
  let number = sum - minV - maxV
  if (arr.length === 0
      ||arr.length === 1
      ||arr.length === 2) return 0;
  else return number;
}

//280 Классифицировать нового участника
function openOrSenior(data){
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7)  arr.push('Senior') ;
    else arr.push('Open');
  }
  return arr
}
//281 The highest profit wins!
function minMax(arr){
  let maxValue = Math.max(...arr)
  let minValue = Math.min(...arr)
  return [minValue,maxValue]; // fix me!
}

//282 Обнаружение анаграмм
var isAnagram = function(test, original) {
  let one = test.toLowerCase().split('').sort().toString()
  let two = original.toLowerCase().split('').sort().toString()
  return(one === two)
};

//283 функция возвращает массив/список чисел без последнего элемента
function withoutLast(arr) {
  // Fix it
  //arr.pop(); // removes the last element
  return arr.slice(0, arr.length-1);
}
//284 How long should you cook this for?
function cookingTime(neededPower, minutes, seconds, power) {
  let nP = neededPower.substring(0, neededPower.length - 1)
  let p = power.substring(0, power.length - 1)
  //let timeInSeconds = p * (minutes * 60 + seconds) / nP;
  let timeInSeconds = nP * (minutes * 60 + seconds) / p;
  let timeRound = Math.ceil(timeInSeconds);
  let min = Math.floor(timeRound / 60)
  let sec = timeRound - (min * 60)
  return `${min} minutes ${sec} seconds`
}
//285
const f = (str)=>{
  let arr = str.split('');
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    (arr[i-1] === ' '
        ? newArr.push(arr[i].toUpperCase())
        : newArr.push(arr[i]))
  }
  return newArr.join('');
}

//286 isogram
function isIsogram(str){
  const letters = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (letters[letter]) {
      return false;
    }
    letters[letter] = true;
  }
  return true;
}

//287 Are the numbers in order?
function inAscOrder(arr) {
  for (let i=0; i<arr.length-1; i++){
    if (arr[i] < arr[i+1]) continue
    else return false
  }
  return true
}

//288 Sum of Minimums!
function sumOfMinimums(arr) {
  let sum = 0;
  for(let i =0; i<arr.length; i++){
    sum+= Math.min(...arr[i])
  }
  return sum
}

//289 Find the middle element
function gimme(triplet) {
  if (triplet[0] > triplet[1] && triplet[0] < triplet[2]) return 0
  else if (triplet[0] < triplet[1] && triplet[0] > triplet[2]) return 0
  else if (triplet[1] > triplet[0] && triplet[1] < triplet[2]) return 1
  else if (triplet[1] < triplet[0] && triplet[1] > triplet[2]) return 1
  else return 2
}

//290 Gravity Flip
const flip=(d, a)=>{
  if (d == 'R') return a.sort((a, b) => a - b);
  else if( d == 'L') return a.sort((a, b) => b - a);
}

//291 Round up to the next multiple of 5
function roundToNext5(n){
  if (n === 0) return 0
  return (Math.ceil(n/5)*5)
}

//292 Two Oldest Ages
function twoOldestAges(ages){
  return ages.sort((a,b)=>a-b).slice(ages.length-2,ages.length)
}