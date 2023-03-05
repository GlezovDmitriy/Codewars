//1
function booleanToString(b){
  if (b==true){
    return "true";
  }
  return "false";//your code here
};
//2
function solution(str){
    return str.split("").reverse().join("");
  }
//3
function evenOrOdd(number) {
  
    if (number%2===0){
      return "Even"
    }
    return "Odd";
  }
  //4
  function otherAngle(a, b) {
    return (180-a-b);
  }
  //5
  function simpleMultiplication(number) {
    if(number%2==0){
      return (number*8)// your code........
}
  return (number*9);
  }
//5
const quarterOf = (month) => {
  if (month<=3){
    return 1;
  }
  else if (month<=6){
    return 2;
  }
  else if (month<=9){
    return 3;
  }
  else if (month<=12){
    return 4;
  }
    
}
// Your code here
  
//6
function isDivisible(n, x, y) {
  if (n%x==0 && n%y==0){
    return true;
  } else {
    return false;
  }
}
//7

function _if(bool, func1, func2) {
  if (bool === true){
    return func1();
  } 
    return func2();
  
      
  }
//8
function square(num) {
  return num*num; 
 }// Write the "square"-function here
 
 //9
 function past(h, m, s){
    return h*60*60*1000+m*60*1000+s*1000;
}
//10
function sayHello(name) {
  return 'Hello, '+ name;
}
//11
function repeatStr (n, s) {
  let repeat = '';
  for (let i=1; i<=n; i++){
     repeat += s;
  }
  return repeat;
}
//12
var cubeChecker = function(volume, side){
  
  if (volume/side/side ==side && side>0){
    return true;
  
  } else 
  {return false}
};
//13
function greet() {
  return "hello world!"
};
//14
function strCount(str, letter){ 
  let result=0;
  for (let i=0; i<=str.length-1; i++) {
    if (str[i]==letter) {
       result++;
    } 
  } 
  return result;
}

//15
function numberToPower(number, power){
  console.info(Math.log2(1024));
  let result=1;
  for (let i=1; i<= power; i++){
    result = result*number;
  }
  return result;
}

//16
var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
    
  if (humanYears ==1){
    catYears = 15;
    dogYears = 15;
  } else if (humanYears ==2){
    catYears = 15+9;
    dogYears = 15+9;
  } else { 
      catYears = 4*(humanYears-2)+24;
      dogYears = 5*(humanYears-2)+24;
    }
  
  return [humanYears,catYears,dogYears];
}

//17

function countSheeps(arrayOfSheep) {
  let sum =0;
    for (let i = 0; i<=arrayOfSheep.length; i++){
    if (arrayOfSheep[i]==true && arrayOfSheep[i]!=null && arrayOfSheep[i] !=undefined){
       sum+=1;
    } else continue;
  }
  return sum;
}

//18

function chromosomeCheck(sperm) {
  if (sperm == 'XY'){
    return "Congratulations! You're going to have a son."
  } else {
    return "Congratulations! You're going to have a daughter."
  }
}

//19

function reverseWords(str){
  let arr = str.split(' ');
  let arr2   = arr.reverse();
  let result = arr2.join(' ');
  return result; // reverse those words
}

//20
function squareSum(numbers){
  let summa =0;
  for (let i=0; i<=numbers.length-1; i++){
  summa += numbers[i]**2;
  }
     return summa; 
}

//21

function litres(time) {
   
  return Math.floor(time*0.5);
}

//22
function xor(a, b) {
  if (a === b) {
    return false;
  } else {
    return true;
  }
      
}
//23
function mango(quantity, price){
  let par;
  par = Math.floor(quantity/3);
   return price*(quantity - par);
 }

//24
function addLength(str) {
  let arr = str.split(" ");
  let arr2 =[];
 for (let i = 0; i<=arr.length-1; i++){
   arr2[i] = (arr[i]+' '+arr[i].length);
 }
  return arr2;
}

//25 определить век по году

function century(year) {
  let a;
  a = Math.ceil(year/100);
  return a;
}

//26
function howManyLightsabersDoYouOwn(name) {
  let num;
  if (name == 'Zach'){
    return 18;
  }
  return 0;
}

//27

function invert(array) {
  
  for (let i = 0; i<=array.length-1; i++){
    array[i] = -array[i];
  }
  return array;
}

//28-29
//29 Создайте функцию, вызываемую shortcut для удаления строчных гласных ( a, e, i, o, u) в заданной строке.

function shortcut (str) {
  let arr = str.split('');
  let result;
    for (let i=0; i<arr.length; i++){
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
      delete arr[i];
    } else {
      continue
    }
       
  }
  return result = arr.join('');
}

//30 Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку.

function grow(arr){
  let result = 1;
  for (let i = 0; i<arr.length;i++){
    result *= arr[i];
  }
  return result;

}

 //31 Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.

 function removeExclamationMarks(str) {
  let arr = str.split('');
  let str1;
  for (let i = 0; i<arr.length; i++){
    if(arr[i] == '!'){
      delete arr[i]
    } else continue;
  }
  str1 = arr.join('');
  return str1;
}

//32 принимает неотрицательное целое число nв качестве входных данных и возвращает список всех степеней 2с показателем степени от 0до n

function powersOfTwo(n){
  let arr = [];
  for (let i = 0; i<=n; i++){
    arr.push(2**i);
  }
  return arr;
}

//33 Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.

var summation = function (num) {
  let sum = 0;
 for (let i= 1; i<=num; i++){
   sum +=i;
 }
  return sum;
}

//34

function multiply(a, b){
  return a * b
 }

 