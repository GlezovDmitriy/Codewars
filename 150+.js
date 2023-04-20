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