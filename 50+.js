//51
function ifChuckSaysSo(){
    return !true
    }
//52
function joinStrings(string1, string2){
    return `${string1} ${string2}`;// code here
 }
 
//53 если переданы параметры (2, 6), функция должна возвращать [2, 4, 6] значения 2, 4 и 6, кратные от 2 до 6. если(5,17) то [5,10,15]

function findMultiples(integer, limit) {
    let arr = [];
    let x;
    for (let i = integer; i<= limit; i+=integer){
      arr.push(i);
        } ;
    return arr;
  }
 
//54 строку в число(в строке цифры)

const stringToNumber = function(str){
    // put your code here
    return str*1;
  }

 //55 литры, миль/на литр, мили.
 
 const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(fuelLeft ==0 ){
      return false;
    } else if ( mpg*fuelLeft >= distanceToPump ){
      return true;
    } else 
      return false;
  };

//56 разница объёмов

function findDifference(a, b) {
    let v1  = a[0]*a[1]*a[2];
    let v2  = b[0]*b[1]*b[2];
    if (v1 > v2){
      return v1-v2;
    } else if (v2 > v1){
      return v2-v1;
    } else if(v1 == v2){
      return 0;
    }
  }

  //57

  function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

 //58 удалить из строки все пробелы и вывести строку без них
 
 function noSpace(x){
str = '';
let arr = x.split(' ');
  let arr2 =[];
  for(let i =0; i<=arr.length; i++){
    if (arr[i] !== ' '){
      arr2.push(arr[i]);
    }else continue;
  }
  return arr2.join('');
}

//59 индекс массы тела

function bmi(w, h) {
  let imt = w / h**2;
  if( imt <=18.5){
    return  "Underweight";
  } else if( imt >18.5 && imt <=25){
    return  "Normal";
  } else if( imt >25 && imt <=30){
    return  "Overweight";
  } else {
    return "Obese";
  }
  
}


//60

var a = "code";
var b = "wa.rs";
var name = a + b;

//61

function hoopCount (n){
  if (n<10){
    return "Keep at it until you get it"
  } else {
    return  "Great, now move on to tricks"
  }
  
}

//62

function lovefunc(f1, f2){
  if(f1%2 ==0 && f2%2 !== 0){
    return true;
  } else if( f1%2 !==0 && f2%2 == 0){
    return true;
  } else 
    return false;
}

//63

function addFive(num) {
  let total = num + 5
  return total
}

//64

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//65

function removeChar(str){
  let st = str.slice(1, str.length-1) ;
  return st;
};

//66 Если длина ключа равна 5, то поместите ключ в свой массив. Отдельно,
//   если длина значения равна 5, то поместите значение в свой массив.

function giveMeFive(obj){
  let arr = [];
  for (let key in obj){
    if (key.length == 5 && obj[key].length == 5){
      arr.push(key);
      arr.push(obj[key]);
    } else if(key.length == 5 && obj[key].length !== 5){
      arr.push(key);
    } else if(key.length !== 5 && obj[key].length == 5){
      arr.push(obj[key]);
    } else 
      continue;
  }
  return arr;
}

//67 функцию, которая принимает 2 целых числа в виде строки в качестве 
//   входных данных и выводит сумму (также в виде строки):

function sumStr(a,b) {
  let sum = Number(a) + Number(b) +'';
  return sum;
}

//68 среднее значение данного массива, округленное до ближайшего целого числа.
 
function getAverage(marks){
  let sum = 0;
  let medium;
   for (let i=0; i < marks.length; i++){
     sum += marks[i];
     medium = sum/marks.length;
   }
   return Math.floor(medium);
 }
 
 //69

 function greet(language) {
  let lang = {
   english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
 };
 for (let key in lang){
   if (key == language){
     return lang[key];
   }  
 }
  return lang['english'];
}

//70

function areYouPlayingBanjo(name) {
  if (name[0] == 'R' || name[0] == 'r'){
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}

//71

function apple(x){
  if(x*x > 1000){
    return "It's hotter than the sun!!"
  } else {
    return "Help yourself to a honeycomb Yorkie for the glovebox."
  }
  }

//72

function problem(x){
  if (typeof x === 'string'){
    return "Error";
  } else{
    return x*50+6
  }
}

//73

function fixTheMeerkat(arr) {
  let arr1 = [];
   arr1.push(arr[2]);
   arr1.push(arr[1]);
   arr1.push(arr[0]);
   return arr1;
 }

 //74

 function check(a, x) {
  if (a.includes(x)){
    return true}
  else {
    return false};
}

//75

function doubleInteger(i) {
  return i*2;
}

//76 Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  let arr = [];
  let num = 0;
  let sum = 0;
  if (input === null || input.length == 0){
    return arr;
  }
  for(let i=0; i<input.length; i++){
    if(input[i]>0){
      num+=1;
    }else if (input[i]<0){
      sum+=input[i];
    }else if (input[i] == 0){
     
    }
  }
  arr.push(num);
  arr.push(sum);
  return arr;
}

//77

function monkeyCount(n) {
  let arr = [];
  let num = 0;
  for (let i =1; i<= n; i++){
    num+=1;
    arr.push(num);
  }
  return arr;
}

//78

function makeNegative(num) {
  if (num > 0){
    return -num;
  } else if (num < 0 ){
    return num;
  } else if (num == 0 ){
    return 0;
  }
 }

 //78/2
 function makeNegative(num) {
  let ans = (num<0)? num :(num>0)? -num : num;
   return ans;
 }

 //79

 function mystery() {
  var results = 
    {sanity: 'Hello'};
  return results;
}

//80
function dutyFree(normPrice, discount, hol){
  let count = hol / (normPrice*discount /100);
   return Math.floor(count);
 }

//81 просуммировать различия между последовательными парами в массиве в порядке убывания.

function sumOfDifferences(arr) {
  let sum = 0;
  if( arr.length == 0 || arr.length == 1  )
    return 0;
  let arr2 = arr.sort(function sN(a,b){return b-a});
    for(let i=0; i<=arr2.length-2; i++){
    sum += (arr2[i]-arr2[i+1]);
  }
  return sum;
}

//82

function basicOp(operation, value1, value2)
{
  if (operation == '+'){
    return value1 + value2;
  } else if (operation == '-'){
    return value1 - value2;
  } else if (operation == '*'){
    return value1 * value2;
  } else if (operation == '/'){
    return value1 / value2;
  }
}

//83
function makeUpperCase(str) {
  return str.toUpperCase();
 }

 //84

 function oddCount(n){
  let count = 0;
  let num = n-1;
  for(let i = num; i>0; i--){
    if(i%2 !== 0) count+=1;
    else continue;
  }
  return count;
}

// variant #2

function oddCount(n){
   return Math.floor(n/2);
} 

//85
function first(arr, n) {
  let arr2 = [];
  if (n == 0) return [];
  else if(n == null) return arr.slice(0, 1);
  else return arr.slice(0, n);
}

//86
function whatday(num) { 
  switch (num) {
    case 1: return "Sunday";
    break;
    case 2: return "Monday";
    break;
    case 3: return "Tuesday";
    break;
    case 4: return "Wednesday";
    break;
    case 5: return "Thursday";
    break;
    case 6: return "Friday";
    break;
    case 7: return "Saturday";
    break;
    default: return "Wrong, please enter a number between 1 and 7";
  }
  }

//87

function sortMyString(S) {
  let str= '';
 let str1= '';
 let str2= '';
 for (let i = 0; i<S.length; i+=2){
   str1+= S[i];
 }
 for (let j = 1; j<S.length; j+=2){
   str2 += S[j];
 }
   return str1 +' '+ str2;
}

//88

function getRealFloor(n) {
  if (n>0 && n<13){
    return n-1;
  } else if (n >=13){
    return n-2;
  } else return n;
}

//89

function unusualFive() {
  let str = '     '
  return str.length;
  
}

//90

// Sum Numbers
function sum (numbers) {
  let sum = 0;
  if (numbers.length == 0){
    return 0;
  }
  for (let i =0; i<numbers.length; i++){
    sum += numbers[i];
  }
       return sum;
};

//91

const areaOrPerimeter = function(l , w) {
  if (l == w){
    return l**2;
  } else return l+l+w+w;
   
 };

 //92

 function feast(beast, dish) {
  if (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1] ){
  return true;
} else return false;
}

//93 мы разбили 365 долларов на 1 купюру по 5 долларов, 
// 1 банкноту на 10 долларов, 1 купюру на 50 долларов и 3 купюры на 100 долларов:

function giveChange(amount) {
  let arr = [0,0,0,0,0,0];
  arr[5] = Math.floor(amount / 100);
  arr[4] = Math.floor((amount - (arr[5] * 100)) / 50);
  arr[3] = Math.floor((amount - (arr[5] * 100)- (arr[4] * 50)) / 20);
  arr[2] = Math.floor((amount - (arr[5] * 100)- (arr[4] * 50)-(arr[3]*20)) / 10);
  arr[1] = Math.floor((amount - (arr[5] * 100)- (arr[4] * 50)-(arr[3]*20)-(arr[2]*10)) / 5);
  arr[0] = Math.floor((amount - (arr[5] * 100)- (arr[4] * 50)-(arr[3]*20)-(arr[2]*10)-(arr[1]*5)) / 1);
return arr;
}

// //94  принимает отсортированный массив ary и значение val и
//  возвращает наименьший индекс, куда вы можете вставить val,
//   чтобы сохранить отсортированность массив. Входной массив
//    всегда будет отсортирован в порядке возрастания. Он может
//     содержать дубликаты.

function keepOrder(ary, val) {
  if(ary.length == 0){
      return 0;
    };
  for (let i =0; i<ary.length; i++){
    if( val > ary[ary.length - 1]){
      return ary.length;
    }
    else if(val <= ary[i] ){
      return i;
    } else continue;
    }
    
}

//95 таблица умножуния

function multiTable(n) {
  let i =1;
  let str = '';
  while (i<=9){
     str += `${i} * ${n} = ${n*i}\n`;
    i++;
  }
    str += `${10} * ${n} = ${n*10}`;
  return str;
}

//96 Возвращает новый массив, состоящий из элементов, кратных их собственному индексу во входном массиве (длина > 1).

function multipleOfIndex(array) {
  let arr = [];
  for( let i = 1; i<array.length; i++){
    if(array[i]%i == 0) {
       arr.push(array[i]);
    } else continue;
    }return arr;
}

//97 Создайте метод, который принимает список и элемент и возвращает значение, 
// true если элемент принадлежит списку, в противном случае false.


function include(arr, item){
  if (arr.includes( item )){
    return true;
  } else return false;
 }

//98 содержит ли предоставленный массив значение, не используя цикл.

function check(a,x){
  if (a.includes( x )){
    return true;
  } else return false;
};

//99 получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат!

function betterThanAverage(classPoints, yourPoints) {
  let sum=0;
  for (let i=0; i<classPoints.length; i++){
    sum+= classPoints[i];
  }
  if(sum/classPoints.length < yourPoints) return true;
  else return false;
}

//100

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b; break;
    case'-': result = value.a - value.b; break;
    case'/': result = value.a / value.b; break;
    case'*': result = value.a * value.b; break;
    case'%': result = value.a % value.b; break;
    case'^': result = Math.pow(value.a, value.b); break;
  }
  return result;
}








