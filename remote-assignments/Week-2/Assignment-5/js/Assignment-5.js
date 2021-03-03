function binarySearchPosition(numbers, target) {
    let left = 0;
    let right = numbers.length -1;
    while (left <= right) {
        mid_index = parseInt((left+right)/2);
        if (target < numbers[mid_index]) {
            right = mid_index - 1;
        } else if (target > numbers[mid_index]) {
            left = mid_index + 1;
        } else {
            return(mid_index);
        }
    }
    return(-1);
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1) ); 
// should print 0
    
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6) ); 
// should print 3