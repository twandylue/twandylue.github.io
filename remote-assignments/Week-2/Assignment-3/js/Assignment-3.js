function count(input) {
    let index = 0;
    // let alpha = {}; //錯誤寫法，宣告於錯誤的位置
    let alphabet = [];
    for (let i = 0; i < 26; i++) {
        // 宣告一個含有26個(對應26個字母)元素的矩陣，且每個元素皆為Object，需要先透過宣告放入內容，否則之後矩陣會不完整(跳過某些位置的元素)
        let alpha = {}; //important 宣告於正確的位置，每次迴圈重新宣告一個Object
        alpha['letter'] = ''; 
        alpha['count'] = 0;
        alphabet[i] = alpha;
    }
    for (let i=0; i<input.length; i++) {
        // 將input內字母對應字母表順序放入alpha矩陣中
        index = input[i].charCodeAt()-97; //轉換字母到對應的順序位置
        alphabet[index]['letter'] = input[i];
        alphabet[index]['count'] += 1;
    }

    let answer = {}; //回傳用途的Object
    for (let i=0; i<alphabet.length; i++) {
        if (alphabet[i]['count'] > 0) {
            // input中字母至少出現一次才須要回傳(展示)
            answer[`${alphabet[i]['letter']}`] = alphabet[i]['count']; // 新增Object中的Key and Value
        }
    }
    return(answer);
}

function groupByKey(input) {
    let index = 0;
    let alphabet = [];
    for(let i=0; i<input.length; i++){
        let alpha = {};
        alpha['letter'] = '';
        alpha['count'] = 0;
        alpha['total_value'] = 0;
        alphabet[i] = alpha;
    }

    for (let i=0; i<input.length; i++) {
        index = input[i]['key'].charCodeAt()-97;
        alphabet[index]['letter'] = input[i]['key'];
        alphabet[index]['count'] += 1;
        alphabet[index]['total_value'] += input[i]['value'];
    }

    let ans = {};
    for (let i=0; i<input.length; i++) {
        if (alphabet[i]['count']>0) {
            ans[`${alphabet[i]['letter']}`] = alphabet[i]['total_value'];
        }
    }
    return(ans)
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