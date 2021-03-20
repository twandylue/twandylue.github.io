function delayedResult (n1, n2, delaytime, callback) {
    const n = n1 + n2;
    setTimeout(callback, delaytime, n); // n is the parameter in callback
}

delayedResult(4,5,3000, function(result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5,10,2000, function(result) {
    console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds 

// 改成arrow function
// delayedResult(4,5,3000, (result) => {
//     console.log(result);
// }); // 9 (4+5) will be shown in the console after 3 seconds

// delayedResult(-5,10,2000, (result) => {
//     console.log(result);
// }); // 5 (-5+10) will be shown in the console after 2 seconds 
