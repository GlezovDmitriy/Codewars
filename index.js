//1
function booleanToString(b){
  if (b==true){
    return "true";
  }
  return "false";//your code here
};
//2
function solution(str){
    return str.split("").reverse().join("");
  }
//3
function evenOrOdd(number) {
  
    if (number%2===0){
      return "Even"
    }
    return "Odd";
  }
  //4
  function otherAngle(a, b) {
    return (180-a-b);
  }
  //5
  function simpleMultiplication(number) {
    if(number%2==0){
      return (number*8)// your code........
}
  return (number*9);
  }
//5
const quarterOf = (month) => {
  if (month<=3){
    return 1;
  }
  else if (month<=6){
    return 2;
  }
  else if (month<=9){
    return 3;
  }
  else if (month<=12){
    return 4;
  }
    
}
// Your code here
  
//6
function isDivisible(n, x, y) {
  if (n%x==0 && n%y==0){
    return true;
  } else {
    return false;
  }
}
//7

function _if(bool, func1, func2) {
  if (bool === true){
    return func1();
  } 
    return func2();
  
      
  }
//8
function square(num) {
  return num*num; 
 }// Write the "square"-function here
 
 //9
 function past(h, m, s){
    return h*60*60*1000+m*60*1000+s*1000;
}
//10
function sayHello(name) {
  return 'Hello, '+ name;
}
//11
function repeatStr (n, s) {
  let repeat = '';
  for (let i=1; i<=n; i++){
     repeat += s;
  }
  return repeat;
}
//12
var cubeChecker = function(volume, side){
  
  if (volume/side/side ==side && side>0){
    return true;
  
  } else 
  {return false}
};
//13
function greet() {
  return "hello world!"
};
//14
function strCount(str, letter){ 
  let result=0;
  for (let i=0; i<=str.length-1; i++) {
    if (str[i]==letter) {
       result++;
    } 
  } 
  return result;
}

//15
