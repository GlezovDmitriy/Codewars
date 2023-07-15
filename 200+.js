//200

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  
    return ((givenMass1/molarMass1 + givenMass2/molarMass2) * 0.082 * (temp+273.15)) / volume;
    }
//201
   
function getSize(width, height, depth){
    let area = width*height*2 + width*2*depth + height*2*depth;
    let volume = width * height * depth;
    return [ area, volume];
  }

 //202
 
 function combat(health, damage) {
    if (damage >= health) return 0;
    else return health - damage;
  }

//203
 
function logs(x , a, b){
    return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x) ;
   }

//204

function finalGrade (ex, pr) {
  if (ex > 90 || pr > 10) return 100;
  else if ( ex > 75 && pr >= 5) return 90;
  else if ( ex > 50 && pr >= 2)return 75;
  else return 0;
  }

  //205

  function grader(s) {
    if (s > 1 || s < 0.6) return 'F';
    else if ( s >= 0.9) return 'A';
    else if ( s >= 0.8) return "B";
    else if ( s >= 0.7) return "C";
    else if ( s >= 0.6) return "D";
    
  }

  //206 Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.

  function findAverage(array) {
    if (array.length == 0) return 0;
    let sum = 0;
    for (let i=0; i<array.length; i++){
      sum+=array[i];
    }
    let medium = sum / array.length;
    return medium;
  }

  //207 посчитать объем кирпича в бутылке

  function iceBrickVolume(radius, bottleLength, rimLength) {
    let h = bottleLength - rimLength;
    let s = radius*radius+radius*radius;
    return s*h;
  }
//208

function remove (string) { 
  return string.replace(/!+$/, '');
}

//209

let a = "dev"
let b = "Lab"
let name = a + b

//210

function sixToast(num) {
  if (num < 6) {
    return 6-num;
  } else if (num > 6){
    return num - 6;
  } else return 0;
}

//211

function enough(cap, on, wait) {
  if ( cap-on >= wait){
    return 0;
  } else if(cap-on < wait ) {
    return wait-(cap-on)};
}

//212 Учитывая список a numbers, верните фиксированный список, 
//чтобы значения увеличивались на 1 для каждого индекса от минимального значения 
//до максимального значения (включая оба).

function pipeFix(numbers){
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let arr = [];
  arr.push(min);
  for (let i = 0; arr[i] < max; i++){
    arr.push(arr[i]+1);
  }
    return arr;
}

//213 вернуть название ближайшего к вызываемому этажу лифта ( "left"/ "right").
       //в случае, когда оба лифта одинаково удалены от вызываемого этажа, выбирайте лифт справа.

function elevator(left, right, call){
  if ((Math.abs(left-call)) > (Math.abs(right-call))){
    return 'right'
  } else if ((Math.abs(left-call)) < (Math.abs(right-call))){
    return 'left'
  } else if ((Math.abs(left-call)) == (Math.abs(right-call))){
    return 'right'
  }
  }

//214

function HQ9(code) {
  if (code == 'H') return 'Hello World!';
  else if (code == 'Q') return 'Q';
  else if (code == '9') return '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
}

//215

function contamination(text, char){
  if (text.length ==0 || char.length ==0) return '';
  let str = '';
  for(let i = 0; i<text.length; i++){
    str+=char;
  }
  return str;
}

//216

function multiply(number){
  let str = String(Math.abs(number));
  if (number == 0) return 0;
  else 
  return number * (5**str.length);
}

//217

function add(a, b){
	if (a*1 === b*1) return true;
  else return false;
}

//218

function combineNames (fName, lName){
  return fName +' '+ lName;
}

//219

function sc(floor){
  if (floor<=1)return '';
  else if(floor<=6){
    return `${"Aa~ ".repeat(floor-1)}Pa! Aa!`;
  } else if(floor>6){
    return `${"Aa~ ".repeat(floor-1)}Pa!`;
  }
}

//220  Перевернуть строку (слова поменять местами -  а не буквы)

function reverse(string){
  let arr = string.trim().split(' ').reverse().join(' ');
  return arr;
}

//221 массив. дано: мин, макс и шаг.

function generateRange(min, max, step){
  let arr=[];
  arr.push(min);
  for (let i = 0; arr[i] < max; i++){
    if( (arr[i]+step) <= max){
      arr.push(arr[i]+step);
    }else break;
  }
  return arr;
}

//222 вернуть два различных самых высоких значения в списке. Если уникальных значений меньше двух, верните как можно ///больше из них.

function twoHighest(arr) {
  if (arr.length == 0) return [];
  else if (arr.length == 1) return [arr[0]];
  arr.sort((a, b) => b - a);
  for( let i= 0; i < arr.length; i++){
    if( arr[i] !== arr[i+1])  {
      return [arr[i], arr[i+1]];
  } else continue;
  }
 
}

//223

function whoIsPaying(name){
  if (name.length == 0) return [''];
  else if (name.length == 1 ) return [name];
  else if (name.length == 2 ) return [name];
  else return [name, name.slice(0,2)];
}

//224

function sumSquares(array) {
  let res = array.reduce(function(sum, elem) {
	return sum + elem**2;
}, 0);
  return res;
}

//225

function updateLight(current) {
  return (current == 'green'? 'yellow': current == 'yellow'? 'red': 'green');
}

//226

function cockroachSpeed(s) {
  return Math.floor( s * 27.777778);
}

//227 удалить из массива определенные слова

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = birds.filter(word => word !=="African" && word !=="Roman Tufted" 
                            && word !=="Toulouse" && word !=="Pilgrim"
                           && word !=="Steinbacher");
  return result;

};

//228 сложить элементы все, поделить на их колличество

var findAverage = function (nums) {
  let sum = 0;
  for (let i=0; i< nums.length; i++){
    sum += nums[i];
  }
  return sum / nums.length;
}

//229 округлить до 2-го знака

function twoDecimalPlaces(n) {
  return n.toFixed(2)*1;
  }

//230

function leo(oscar){
  if (oscar == 88) return  "Leo finally won the oscar! Leo is happy";
  else if (oscar == 86) return "Not even for Wolf of wallstreet?!";
  else if ( oscar == 87 || oscar < 86) return "When will you give Leo an Oscar?";
  else return  "Leo got one already!";
}

//231

let name = 'Abe';
let greet_abe = function() {
  return "Hello, " + name + '!';
};
let name2 = 'Ben';
let greet_ben = function() {
  return "Hello, " + name2 + '!';
};

//232  Вернуть строку без гласгных

function disemvowel(str) {
  let arr = str.split('');
  let arr2 =[];
  for( let i = 0; i< arr.length; i++){
    if (arr[i]== 'a' || arr[i]== 'e' ||
        arr[i]== 'i' || arr[i]== 'o' || 
        arr[i]== 'u' || arr[i]== 'A' || 
        arr[i]== 'E' || arr[i]== 'I' || 
        arr[i]== 'O' || arr[i]== 'U') continue;
    else arr2.push(arr[i]);
  }
  
  return arr2.join('');
}

//232 2 Вернуть строку без гласгных

function disemvowel(str) {
  let arr = str.split('');
  let arr2 = arr.filter(function(elem){
    return elem !== 'a' && elem !== 'e' &&
        elem !== 'i' && elem !== 'o' && 
        elem !== 'u' && elem !== 'A' && 
        elem !== 'E' && elem !== 'I' && 
        elem !== 'O' && elem !== 'U'
    });
  return arr2.join('');
}

//233

function squareDigits(num){
  let arr = String(num).split('');
  let arr2 = arr.map(function(elem){
    return elem**2;
  });
  return +arr2.join('');
}

//234 В строке чисел, найти макс и мин, и вывести строкой.

function highAndLow(numbers){
  let arr = numbers.split(' ');
  let arr2 = arr.map(function(el){
    return 1*el;
  });
let max = Math.max(...arr2);
let min = Math.min(...arr2);
let st = String(max) +' '+ String(min);
return st;
};

//234-2 через сортировку

function highAndLow(numbers){
  var arr = numbers.split(' ').sort(function(a, b) { return a - b });
  return arr[arr.length -1] + ' ' + arr[0];
}

//235

var isSquare = function(n){
  if(n<0) return false;
  else if (Math.sqrt(n)%1 == 0) return true;
  else return false;
  
}

//236 создать функцию, которая может принимать любое неотрицательное целое число
      //в качестве аргумента и возвращать его с цифрами в порядке убывания

function descendingOrder(n){
  //let arr = String(n).split('').sort(function(a,b){return (b-a)});   
  //let str = arr.join('');
  //return +str;
  return + String(n).split('').sort(function(a,b){return (b-a)}).join('');
}

//237  Вывести середину строки, 1 или 2 символа.
      //Kata.getMiddle("test") should return "es"

      //Kata.getMiddle("testing") should return "t"


function getMiddle(s){
  let arr = s.split('');
 let index = arr.length/2;
 let arr2 = [];
 let str;
 if( arr.length%2 == 0) {
     arr2 = arr.slice(index-1, index+1);
     str = arr2.join('');
 } else {
     arr2 = arr[index-0.5];
     str = arr2;
 };
 
 return str;
}

//238 Убрать из массива строки

function filter_list(l) {
  let arr = l.filter(function(elem){
    return typeof(elem) !== 'string';
  })  
   return arr;
  }

//239 Посчитать гласные

function getCount(str) {
  str.toLowerCase();
  let arr = str.split('');
  let count = 0;
  for (let i =0; i<arr.length; i++){
    if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u')
      count++;
    else continue;
  }
      return count;
}

//240 содержит ли строка одинаковое количество «x» и «o».

function XO(str) {
  str.toLowerCase();
let arr = str.split('');
let countX = 0;
let countO = 0;
for (let i =0; i<arr.length; i++){
  if(arr[i] == 'x' || arr[i] == 'X')
    countX++;
  else if (arr[i] == 'o' || arr[i] == 'O')
    countO++;
  else continue;
} 
return countX == countO;
}

//241 Найти сумму двух наименьших чисел в массиве.

function sumTwoSmallestNumbers(num) {  
  let arr = num.sort(function(a,b){ return(b-a)});
  let first = arr.pop();
  let second = arr.pop();
  return first + second;
}

//242 Метод endsWith()определяет, заканчивается ли строка символами указанной строки,
      // возвратом   true или false соответствующим образом.

function solution(str, end){
  return str.endsWith(end)
}

//243

function maskify(cc) {
  if(cc.length < 5) return cc;
  let arr = cc.split('');
  arr.reverse();
  for (let i = 4; i<arr.length; i++){
    arr[i] = '#';
  }
  return arr.reverse().join('');

}

//244

function friend(friends){
  let arr = friends.filter(function(elem){
    return elem.length == 4;
  });
   return arr;     
}

//245  Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы 
//    (каждая из которых взята только один раз) из s1 или s2.

function longest(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let arr = arr1.concat(arr2);
 return [...new Set(arr)].sort().join('');
}