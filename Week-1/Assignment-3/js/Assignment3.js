function countAandB (input){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let num_a = 0;
    let num_b = 0;
    let total_num = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == alphabet[0]) {
            num_a += 1;
        } else if (input[i] == alphabet[1]) {
            num_b += 1;
        } else {
            continue;
        }
    }
    total_num = num_a + num_b;
    return (`${total_num} (${num_a} 'a' letter(s) and ${num_b} 'b' letter(s))`)
    // console.log(`${total_num} (${num_a} 'a' letter(s) and ${num_b} 'b' letter(s))`)
}

function toNumber(input) {
    num = [];
    //用ASCII code - 96, 'a'對應ASCII code 97
    for (let i = 0; i < input.length; i++){
        num[i] = input[i].charCodeAt()-96;
    }
    return(`[${num}]`);
    // console.log(input);
}

let input1 = ['a','b','c','a','c','a','c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

// 展示到網頁上
const countAandB_answer1 = `countAandB answer is: ${countAandB(input1)}`;
const toNumber_answer1 = `toNumber answer is: ${toNumber(input1)}`;
document.querySelector('.answer1').innerHTML = countAandB_answer1;
document.querySelector('.answer2').innerHTML = toNumber_answer1;

let input2 = ['e','d','c','d','e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]

// 展示到網頁上
const countAandB_answer2 = `countAandB answer is: ${countAandB(input2)}`;
const toNumber_answer2 = `toNumber answer is: ${toNumber(input2)}`;
document.querySelector('.answer3').innerHTML = countAandB_answer2;
document.querySelector('.answer4').innerHTML = toNumber_answer2;