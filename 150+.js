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

