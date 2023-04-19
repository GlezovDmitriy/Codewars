// 101 найти четное - true

function testEven(n) {
    if(n % 2 == 0){
      return true;
    } else {
      return false;
    }
    
  }

//102

function boolToWord (bool) {
    if (bool === true) return 'Yes';
    else return 'No';
    }

//103    

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

//104 Определите функцию, которая удаляет дубликаты из массива чисел и возвращает его в качестве результата.

function distinct(a) {
    let arr = [...new Set(a)];
      return arr;
    }

//105 найти N-ю степень элемента в массиве с индексом N. Если N вне массива, то вернуть -1.
 
function index(array, n){
    if ( n > array.length-1) return -1;
    else return array[n]**n;
  }

//106

function seatsInTheater(nCols, nRows, col, row) {
    return ((nCols-col+1) * (nRows-row));
       
   }

//107

function mouthSize(animal) {
    return (animal.toLowerCase() == 'alligator')? 'small': 'wide';
  }

//108  

function billboard(name, price = 30){
    let sum = 0;
    if( price !== 30){
      for (let i = 0; i<name.length; i++){
      sum+= price;
      }
    } else { 
      for (let i = 0; i<name.length; i++){
      sum+= 30;
      }
    }
    
   return sum;
  } 

//109

var countSheep = function (num){
    let str = '';
    if (num == 0) return '';
    else {//if (num == 1) return '1 sheep...';
    for (let i=0; i < num; i++){
      str += `${num/num + i} sheep...`;
      
    }
      }
    return str;
  }
 
//110

function checkAlive (health) {
    if (health <= 0) {
      return false;
    } else {
      return true;
    }
  }

//111  

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals +championsLeagueGoals;
  }

//112

function move (position, roll) {
  return position + roll*2;
}

//113 удалите каждый второй элемент из массива

function removeEveryOther(arr){
  let arr2 = [];
  for (let i =0; i<arr.length; i+=2){
    arr2.push(arr[i]);
  }
  return arr2;
}

//114

function pillars(numPill, dist, width) {
  if (numPill == 1) return 0;
  else return ((numPill-1) * dist)*100 + ((numPill-2) * width);
}

//115 Если число имеет целый квадратный корень, возьмите его, иначе возведите число в квадрат.

function squareOrSquareRoot(arr) {
  for (let i=0; i<arr.length; i++){
    if(Math.sqrt(arr[i])%1 == 0){
      arr[i] = Math.sqrt(arr[i]);
    } else arr[i] = arr[i]**2;
  }
  return arr;  
}

//116

function getGrade (s1, s2, s3) {
  let s = (s1+s2+s3) / 3;
  if (s < 60) return 'F';
  else if (s < 70) return 'D';
  else if (s < 80) return 'C';
  else if (s < 90) return 'B';
  else if (s <= 100) return 'A';
}

//117

function paperwork(n, m) {
  if(n<0 || m<0) return 0;
  return n*m;
  
}

//118  получить сумму двух массивов...

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  let arr = arr1.concat(arr2);
arr.forEach(function sumNumber( num ) {
    sum += num;
   }
);
 return sum;
}

//119

function greet (name, owner) {
  if (name == owner) return 'Hello boss';
  else return 'Hello guest';
}

//120

function rentalCarCost(d) {
  let sum;
   if (d < 3){
     sum = d * 40;
   } else if (d>= 3 && d<7){
     sum = d*40 -20; 
   } else if (d>= 7){
     sum = d*40 -50; 
   }
   return sum;
 }

//121

function remainder(n, m){
  if( n >= m) return n%m;
  else if (m > n) return m%n
}

//122

function twiceAsOld(dad, son) {
  let years = dad - 2*son;
  return Math.abs(years);
}

//123

function maps(x){
  let arr = [];
    for (let i =0; i<x.length; i++){
      arr.push(x[i]*2);
    }
    return arr;
  }

 //124 

 function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      name = 'Mercury'; break;
    case 2:
      name = 'Venus'; break;
    case 3:
      name = 'Earth'; break;
    case 4:
      name = 'Mars'; break;
    case 5:
      name = 'Jupiter'; break;
    case 6:
      name = 'Saturn'; break;
    case 7:
      name = 'Uranus'; break;
    case 8:
      name = 'Neptune'; break;
  }
  
  return name;
} 

//125

function bonusTime(salary, bonus) {
  let sum = 0;  
    if(bonus === true){
      sum = salary*10;
    } else sum = salary;
    return `£${sum}`;
  }

//126

function checkForFactor (base, factor) {
  return base%factor == 0 ? true : false;
}

//127

function typeValidation(variable, type) {
  if (typeof (variable) === type) return true;
  else return false;
}

//128 если ваша функция получает 230.00 на вход, она должна вернуть 200.00, без ндс, округленное до 2х знаков

//return price without vat
function excludingVatPrice(price){
  let sum;
  if( price === null) return -1;
  else sum = price - price/115*15;
    return sum.toFixed(2)*1;
}

//129

function opposite(number) {
  return - number;
}

//130

websites.push('codewars');

//131

// mark the MrFreeze object instance as frozen
Object.freeze(MrFreeze);

//132

function countBy(x, n) {
  let z = [];
  for (let i = x; z.length+1<=n; i+=x){
    z.push(i);
  }
  return z;
}

//133

function stringToArray(string){

	return string.split(' ');// code code code

}

//134

function binToDec(bin){
  return parseInt(bin, 2);
   
  }

//135

  function between(a, b) {
    let arr = [a];
    while ( b-a > 0){
      arr.push(a+1);
      a++
    }
    return arr;
  }  

//136

function digitize(n) {
  let str = String(n);
  let arr = str.split('');
  let arr1 =arr.reverse();
    for (let i=0; i<arr.length; i++){
    arr1[i] = arr1[i]*1;
  }
  return arr1;
}

//137 принимает два аргумента и возвращает все числа, которые делятся на заданный делитель.

function divisibleBy(numbers, divisor){
  let arr = [];
  for (let i =0; i<numbers.length; i++){
    if(numbers[i]%divisor == 0){
      arr.push(numbers[i]);
    } else continue;
  }
  return arr;

}

//138

function solution(a, b){
  let str;
  if( a.length > b.length){
    return b+a+b;
  } else return a+b+a;
}

//139  массив чисел, возвращаете сумму всех положительных.

function positiveSum(arr) {
  if(arr.length == 0) return 0;
  let sum = 0;
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > 0){
      sum += arr[i];
    } else continue;
  }
  return sum;
}

//140

function numberToString(num) {
  return String(num);
}

//141 Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0. перевернутый

const reverseSeq = n => {
  let arr = [];
  for (let i =1;i<=n; i++){
    arr.push(i);
  }
  return arr.reverse();
}

//142 Напишите функцию, которая возвращает строку, в которой имя заменено на фамилию. перевернуто имя

function nameShuffler(str){
  let arr = str.split(' ').reverse(). join(' ');
  return arr;
}

//143 должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.

function doubleChar(str) {
  let str2 = '';
  for(let i=0; i<str.length; i++){
    str2+=str[i];
    str2+=str[i];
  }
  return str2;
}

//144 Учитывая массив целых чисел в виде строк и чисел, 
//    верните сумму значений массива, как если бы все они были числами.

function sumMix(x){
  let sum=0;
  for (let i =0; i<x.length; i++){
    sum += Number(x[i]);
  }
  return sum;
}

//145 преобразование шестнадцатеричного кода в десятичный

function hexToDec(hexString){
  return parseInt(hexString, 16); 
}

//146

function derive(c,exp) {
  return `${c*exp}x^${exp-1}`
  
}

//147 объединить их в один, отсортированный по возрастанию, убрать дубликаты

function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2);
  arr.sort(sortNum);
  function sortNum(a,b){
    return a-b;
  }
  let arr3 = Array.from(new Set(arr)); // убрать дубликаты, сделать массивом( Array.from)
  return arr3;
}

//148

function correctTail(body, tail) {
  let end = body.slice(body.length-1);
  if (end == tail){
    return true;
  } else 
    return false;
  }


//149

function fakeBin(x){
  let str = '';
    for( let i = 0; i<x.length; i++){
      if(x[i]<5){
        str += 0;
      } else str += 1;
    }
    return str;
  }

//150

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}


