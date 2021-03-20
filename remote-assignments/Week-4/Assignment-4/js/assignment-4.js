function delayedResultPromise(n1, n2, delayTime) { 
    // your code here … 
    // Promise可以配合.then() or .catch()使用
    let assignment4 = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            resolve(n1+n2); // 回傳n1+n2 
        }, delayTime)
    });
    return assignment4;
}

// 需要再仔細研讀
delayedResultPromise(4,5,3000).then(console.log) // 9 (4+5) will be shown in the console after 3 seconds

async function main() { 
    // your code here, you should call delayedResultPromise here and get the result 
    // console.log('test');
    let assignment4_2 = await delayedResultPromise(-1,5,1000); // await 表示等待delayedResultPromise執行，之後此行指令才會執行
    // let assignment4_2 = delayedResultPromise(-1,5,1000); // test
    console.log(assignment4_2);
}

main() // result will be shown in the console after <delayTime> seconds