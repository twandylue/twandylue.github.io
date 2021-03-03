function max (input) {
    let max_num = input[0];
    for (let i = 0; i<input.length; i++){
        if (max_num <= input[i]){
            max_num = input[i];
        }
    }
    return max_num;
}

function findPosition(input,target) {
    for (let i = 0; i<input.length; i++){
        if (target == input[i]) {
            return(i);
        }
    }
    return(-1);
}

console.log(max([1, 2, 4, 5]) ); // should print 5
console.log(max([5, 2, 7, 1, 6]) ); // should print 7 

console.log(findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8) ); // should print -1
