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

 //35 каждая строчная буква становилась прописной, а каждая прописная буква — строчной


 String.prototype.toAlternatingCase = function () {
  let newstr = '';
 for (let i = 0; i< this.length; i++){
   if ( this[i]== this[i].toUpperCase()) {
    newstr += this[i].toLowerCase();
} else {
  newstr += this[i].toUpperCase();
}
 }
 return newstr;
}

//36 можно составить пифагорейскую тройку, используя эти 3 целых числа

function isPythagoreanTriple(arr) {
  arr.sort(( n1, n2 ) => n1 - n2); 
  const [n1, n2, n3] = arr;
  return n1**2 + n2**2 === n3**2;
    
}

//37 max min в массиве

var min = function(list){
  return Math.min.apply( null, list );
  
}

var max = function(list){
  return Math.max.apply( null, list );
   
}

//38 найти индккс элемента

function find(arr, el) {
  if (arr.indexOf(el) === -1){
  return "Not found";
} else
  return arr.indexOf(el);
}

// еще вариант короче
function find(arr, el) {
  return (arr.indexOf(el) === -1)? "Not found" : arr.indexOf(el);
  
}

//39 создать функцию

function helloWorld (){
  let str = 'Hello World!'
  console.log( str );
}

// 40    +-*/%

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v6 , //set number value to a
      b = v3 ; //set number value to b
  return a - b;
}

function equal3(){
  let a = v1 , //set number value to a
      b = v5; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4 , //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a = v2 , //set number value to a
      b = v4 ; //set number value to b
  return a % b;
}

// 41 string

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

//42 array

function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  return arr;
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}

//43 object


function animal(obj){
      
  return "This "+obj["color"]+" "+obj["name"]+" has "+obj["legs"]+" legs.";
}


//44  0, -0, "", null, undefined, NaN == false

function trueOrFalse(val){
  if (val == false || 
     val == 0 ||
     val == -0 ||
     val == null ||
     val == undefined ||
     val == NaN)    return 'false';             
  else     return 'true';
}

//45 условия

function saleHotdogs(n){
  return n<5? n*100 : n<10? n*95 : n*90;
}

//46 switch

function howManydays(month){
  var days;
  switch (month){
    case 4:
      days = 30;
      break;
      case 6:
      days = 30;
      break;
      case 9:
      days = 30;
      break;
      case 11:
      days = 30;
      break;
      case 2:
      days = 28;
      break;
      default: 
      days = 31;
  }
  return days;
}

//47 перебор к нолю, добавляет * слева-справа 

function padIt(str,n){
  while (n>0) {
  if (n%2 !==0){
     str = "*"+str;
  } else {
    str = str+"*";
  }
  n--
 
}

return str;
}

//48 четные-нечетные в отд.массив

function pickIt(arr){
  var odd=[],even=[];
  for (let i =0; i<arr.length; i++){
    if(arr[i]%2 == 0){
      even.push(arr[i]);
    } else{
      odd.push(arr[i]);
    }
  }
   
  return [odd,even];
}