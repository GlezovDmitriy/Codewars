function gimme(triplet) {
    if (triplet[0] > triplet[1] && triplet[0] < triplet[2]) return 0
    else if (triplet[0] < triplet[1] && triplet[0] > triplet[2]) return 0
    else if (triplet[1] > triplet[0] && triplet[1] < triplet[2]) return 1
    else if (triplet[1] < triplet[0] && triplet[1] > triplet[2]) return 1
    else return 2
}

console.log(gimme([5, 2, 1]))
console.log(gimme([5, 6, 8]))
console.log(gimme([5, 21, 8]))