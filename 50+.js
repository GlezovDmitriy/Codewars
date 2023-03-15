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