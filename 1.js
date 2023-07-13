let str = 'abAdxBooX'
str.toLowerCase();
let arr = str.split('');
let countX = 0;
let countO = 0;
for (let i =0; i<arr.length; i++){
  if(arr[i] == 'x' ||)
    countX++;
  else if (arr[i] == 'o')
    countO++;
  else continue;
} 
// if ( countX === countO) return true;
//else return false;
    //return countX == countO
    //return str;
    
  //} 
  console.log(countX);
  console.log(countO);
  console.log(arr);
  //console.log(str);