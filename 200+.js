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

