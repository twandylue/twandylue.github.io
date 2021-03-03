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
    let left = 0;
    let right = input.length -1;
    let exist_index = 0; //協助判斷target有無在input內的指標
    while (left <= right) {
        mid_index = parseInt((left+right)/2); //除法取整數
        if (target < input[mid_index]) {
            right = mid_index -1;
        } else if (target > input[mid_index]){
            left = mid_index +1;
        } else {
            right = mid_index -1;
            exist_index += 1; //如果target出現在input內，則指標(target出現次數)會累加
        }
    }
    if (exist_index >= 1){
        // 表示target至少出現過一次
        // 回傳左側指標(left)，因為右側指標(right)經過right = mid_index -1，會指向正確答案元素的左邊一個元素
        return(left);
    } else {
        return(-1);
    }
}

console.log( max([1, 2, 4, 5]) ); // should print 5
console.log( max([5, 2, 7, 1, 6]) ); // should print 7 

console.log( findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
console.log( findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first position)
console.log( findPosition([5, 2, 7, 1, 6], 8) ); // should print -1
