//151

function well(x){
    let count = 0;
    for (let i = 0; i<x.length; i++){
      if(x[i] == 'good'){
        count++;
      } else continue;
    }
    if(count > 0 && count <=2) return 'Publish!';
    else if (count >2) return 'I smell a series!';
    else return  'Fail!';
  
  }

//152 сделать первый символ в строке "слово" в верхнем регистре

function capitalizeWord(word) {
    let first = word[0].toUpperCase();
    return first + word.substr(1);
  }

//153

function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
    } else 
    {return "Hello, " + name + "!";
    }
  }

//154 

function playerRankUp (points) {
    if (points >= 100) return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
    else return false;
  }

//155  

const rps = (p1, p2) => {
    if (p1 == p2) return "Draw!";
    else if (p1 == "scissors" && p2 =="paper")
      return "Player 1 won!";
    else if (p2 == "scissors" && p1 =="paper")
      return "Player 2 won!";
    else if (p1 == "scissors" && p2 =="rock")
      return "Player 2 won!";
    else if (p2 == "scissors" && p1 =="rock")
      return "Player 1 won!";
    else if (p1 == "paper" && p2 =="rock")
      return "Player 1 won!";
    else if (p2 == "paper" && p1 =="rock")
      return "Player 2 won!";
  };

//156

function reverseList(list) {
    return list.reverse();
  
  }

//157  

function setAlarm(em, vac){
    if (em == true && vac == true) return false;
    else if ( em == true && vac !== true) return true;
    else return false;
  
  }

//158

function howManyDalmatians(number){
  
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  if(number <= 10) return dogs[0];
  else if (number <= 50) return dogs[1];
  else if (number <= 100) return dogs[2];
  else if (number = 101) return dogs[3];
  
  
}

//159

function plural(n) {
  return (n == 1) ? false : true;
}

//160 масть карты вернуть

function defineSuit(card) {
  if(card[1] == '♣' || card[2] == '♣') return 'clubs';
  else if (card[1] == '♦'|| card[2] == '♦') return 'diamonds';
  else if (card[1] == '♥'|| card[2] == '♥') return 'hearts';
  else if (card[1] == '♠'|| card[2] == '♠') return 'spades';
}

//161

function toFreud(string) {
  let arr = string.split(' ');
  let str = '';
    if ( string == '') return '';
    for(let i =0; i<arr.length; i++){
      str+= 'sex ';
    }
  return str.slice(0, str.length-1);
  }

//162 Вывести строку БЕЗ цифр.

function stringClean(s){
  return s.replace(/[0-9]/g,"");
}

//163

function shortenToDate(longDate) {
  let arr = longDate.split(',');
  return arr[0];
}

//164

function magNumber(info){
  let count;
  if (info[0] == 'PT92') {
    count = info[1] * 3 / 17;
    return Math.ceil(count);
} else if (info[0] == 'M4A1') {
    count = info[1] * 3 / 30;
    return Math.ceil(count);
}  else if (info[0] == 'M16A2') {
    count = info[1] * 3 / 30;
    return Math.ceil(count); 
}  else if (info[0] == 'PSG1') {
    count = info[1] * 3 / 5;
    return Math.ceil(count);  
}
}

//165

function usdcny(usd) {
  return `${(usd*6.75).toFixed(2)} Chinese Yuan`
  
}

//166 берет массив слов, объединяет их в предложение и возвращает предложение, без пробела в конце

function smash (words) {
  let str = '';
  for(let i = 0; i<words.length; i++){
    str += words[i]+' ';
  }
   return str.slice(0, str.length-1);
};

//167

function take(arr, n) {
  let arr1 = [];
  if (n > arr.length) {
    n = arr.length;
  }
  for (let i =0; i<n; i++){
    arr1.push(arr[i]);
  }
  return arr1;
}

//168

function hello(name) {
  if (name)
  return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
  else {
    return "Hello, World!";
  } 
  
}

//169 Удалите все восклицательные знаки из предложения, но убедитесь, что восклицательный знак стоит в конце строки.

function remove (string) {
  let str = '';
  for(let i = 0; i<string.length; i++){
    if (string[i] !== '!'){
      str+= string[i];
    } else continue;
  }
  return str +'!';  
}

//170 Найдите сумму всех кратных n ниже m

function sumMul(n,m){
  if (n <= 0 || m<= 0) return "INVALID";
  let sum = 0;
  let i = n;
  while (i< m){
    sum+=i;
    i += n;
  }
 return sum;
}

//171

function peopleWithAgeDrink(old) {
  if(old <14 ) return "drink toddy";
  else if (old <18 ) return "drink coke";
  else if (old <21 ) return "drink beer";
  else return "drink whisky";
};

//172

function uefaEuro2016(t, s){
  if (s[0] > s[1]){
    return `At match ${t[0]} - ${t[1]}, ${t[0]} won!`;
  } else if (s[0] < s[1]){
    return `At match ${t[0]} - ${t[1]}, ${t[1]} won!`;
  } else if (s[0] == s[1]){
    return `At match ${t[0]} - ${t[1]}, teams played draw.`;
  } 
}

//173

function spEng(s){
  let str = s.toLowerCase();
  return str.includes("english");
 }

//174 

var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`;
}

//175

const solve = (x, y) => x / y;

//176

function getDrinkByProfession(param){
  let par = param.toLowerCase();
  if (par == 'programmer') return "Hipster Craft Beer";
  else if (par == 'jabroni') return "Patron Tequila";
  else if (par == 'school counselor') return "Anything with Alcohol";
  else if (par == 'bike gang member') return "Moonshine";
  else if (par == 'politician') return "Your tax dollars";
  else if (par == 'rapper') return "Cristal";
  else return "Beer";
}

//177 вывести нечетные

function odds(values){
  let oddArr =[];
  for (let i = 0;i <values.length; i++){
    if(values[i]%2 !== 0)
      {oddArr.push(values[i]);
       }else continue;
  } 
   return oddArr;
}

//178

function pointsPer48(ppg, mpg) {
  if( ppg == 0 && mpg == 0) return 0;
  else return +(48*ppg/mpg).toFixed(1);
}

//179

function formatMoney(amount){
  return '$'+`${amount.toFixed(2)}`;
}

//180

function sakuraFall(v) {
  if (v > 0) {
  return 5*80/v;
  } else 
  return 0;
}

//181  возвращает значение true, если сумма квадратов каждого элемента массива 'a' 
       //строго больше суммы кубов каждого элемента массива 'b'

function arrayMadness(a, b) {
  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i<a.length; i++){
    sumA += a[i]**2;
  }
  for (let j = 0; j<b.length; j++){
    sumB += b[j]**3;
  }
  if (sumA > sumB) return true;
  else return false;
}

//182  задача — поменять буквы с диакритическими знаками:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

function correctPolishLetters (string) {
  let str = (string.replace( /ą/g, "a" ));
  let str2 = (str.replace( /ć/g, "c" ));
  let str3 = (str2.replace( /ę/g, "e" ));
  let str4 = (str3.replace( /ł/g, "l" ));
  let str5 = (str4.replace( /ń/g, "n" ));
  let str6 = (str5.replace( /ó/g, "o" ));
  let str7 = (str6.replace( /ś/g, "s" ));
  let str8 = (str7.replace( /ź/g, "z" ));
  let str9 = (str8.replace( /ż/g, "z" ));
  
  return str9;
}

//183 найти max b min и разницу, вывести массив

function differenceInAges(ages){
  let arr = [];
  let min = Math.min(...ages);
  let max = Math.max(...ages);
  let dif = max - min;
  arr.push(min);
  arr.push(max);
  arr.push(dif);
  return arr;

}

//184 возвращать строку, объединяющую все буквы трех введенных строк в группы

function tripleTrouble(one, two, three){
  let str = '';
  for (let i =0; i<one.length; i++){
    str += one[i];
    str += two[i];
    str += three[i];  
  }
  return str;
 }
 
 
//185 убрать нули с конца

 function noBoringZeros(n) {
  let countZero = 0;
   let num;
   let str = String(n);
   for(let i = str.length-1; i>=0; i--){
     if( str[i] == 0) 
       countZero += 1;  // находим кол-во нулей в конце
     else break;
   }
   num = n/ 10**countZero;
   return num;
 }

// вариант 2
 function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10
  }
  return n
}

//186

 function calculateTip(amount, rating) {
  let count;
    let ratin = rating.toLowerCase();
    if(ratin == 'terrible') {
      count = 0;
    } else if (ratin == 'poor') {
      count = amount*0.05;
    } else if (ratin == 'good') {
      count = amount*0.1;
    } else if (ratin == 'great') {
      count = amount*0.15;
    } else if (ratin == 'excellent') {
      count = amount*0.2;
    } else return "Rating not recognised";
      
    return Math.ceil(count);
  }

//187

  var quote = function(fighter) {
    let name = fighter.toLowerCase();
    if (name == 'george saint pierre')
      return "I am not impressed by your performance.";
    else if (name == 'conor mcgregor')
      return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  };  

//188

function rainAmount(mm){
  if (mm >= 40) {
       return "Your plant has had more than enough water for today!"
  }else {
       return `You need to give your plant ${40 - mm}mm of water`
  };
}



