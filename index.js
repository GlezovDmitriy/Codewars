
//([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
//let data = [[45, 12],[55,21],[19, -2],[104, 20]]
//let data = [[3, 12],[55,1],[91, -2],[53, 23]]
//[[59,-2],[72,10],[76,5],[47,13],[44,-1],[27,15],[18,-2]]: expected
// [ 'Open', 'Open', 'Open', 'Open', 'Open', 'Open', 'Open' ]
//to deeply equal [ 'Open', 'Senior', 'Open', 'Open', 'Open', 'Open', 'Open' ]
let data = [[59,-2],[72,10],[76,5],[47,13],[44,-1],[27,15],[18,-2]]
console.log(data[0][0])
console.log(data[0][1])
console.log(data.length)

function openOrSenior(data){

    let arr = [];
    console.log(arr)
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] >= 12)  arr.push('Senior') ;
        else arr.push('Open');
    }
return arr

}
openOrSenior(data)
