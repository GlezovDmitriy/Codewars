//252  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(n){
    return "("+`${n[0]}`+`${n[1]}`+`${n[2]}`+")"+" "+`${n[3]}`+`${n[4]}`+`${n[5]}`+"-"+`${n[6]}`+`${n[7]}`+`${n[8]}`+`${n[9]}`;
  }

//253  Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.

function oddOrEven(array) {
  let sum =0;
  array.forEach(function(el){
    sum+=el
  });
  if (sum%2 == 0) return "even";
  else return 'odd';
}