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
 
 