function count(input) {
    let ans = {};
    for (let i = 0; i<input.length; i++) {
        if (ans[`${input[i]}`] >= 1) {
            ans[`${input[i]}`] += 1;
            continue;
        } else {
            ans[`${input[i]}`] = 1;
        }
    }
    return(ans);
}

function groupByKey(input) {
    let ans = {};
    for (let i = 0; i<input.length; i++) {
        if (ans[`${input[i]['key']}`] >= 0) {
            ans[`${input[i]['key']}`] += input[i]['value'];
            continue;
        } else {
            ans[`${input[i]['key']}`] = input[i]['value'];
        }
    }
    return(ans);
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

let input2 = [
    {key: 'a', value: 3},
    {key: 'b', value: 1},
    {key: 'c', value: 2},
    {key: 'a', value: 3},
    {key: 'c', value: 5}    
]
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}