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