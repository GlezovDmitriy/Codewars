// 101 найти четное - true

function testEven(n) {
    if(n % 2 == 0){
      return true;
    } else {
      return false;
    }
    
  }

//102

function boolToWord (bool) {
    if (bool === true) return 'Yes';
    else return 'No';
    }

//103    

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

//104 Определите функцию, которая удаляет дубликаты из массива чисел и возвращает его в качестве результата.

function distinct(a) {
    let arr = [...new Set(a)];
      return arr;
    }

//105
    