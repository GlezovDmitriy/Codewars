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