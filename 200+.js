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
  