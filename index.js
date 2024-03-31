const f = (str) => {
   /* str.toLowerCase();
    let arr = str.split('').sort();
    console.log(arr)

    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j])
                return 'false';

        }

    }
    return 'true';*/
    const letters = {};
    console.log(letters)
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase();

        if (letters[letter]) {
            return false;
        }

        letters[letter] = true;
    }

    return true;

}
//console.log(f("mirrors"))
console.log(f("misss"))
console.log(f("mis"))
