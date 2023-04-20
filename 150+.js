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