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

  