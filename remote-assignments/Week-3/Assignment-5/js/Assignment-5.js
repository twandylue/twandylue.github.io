// double loop O(n^2)
// function twoSum(nums,target){
//     let arr =[0,0];
//     for (let i = 0; i<nums.length; i++) {
//         let remains = target-nums[i];
//         for (let n = i+1; n<nums.length; n++) {
//             if (remains == nums[n]) {
//                 // arr[0] = nums[i];
//                 // arr[1] = nums[n];
//                 arr[0] = i;
//                 arr[1] = n;
//                 return(arr);
//             }
//         }
//     }
//     return(-1);
// }
// console.log(twoSum([2,7,11,15],9));
//should return [0,1]

// single loop O(n)
function twoSum_2(nums, target) {
    const list = [];
    for(let i=0; i<nums.length; i++){
        const now = nums[i];
        const remains = target - now;
        if(list[remains] != null) {
            // remains有配對到互補(補成target)的值
            return([list[remains],i]);
        } else {
            list[now] = i; // 儲存位置i
        }
    }
    return(-1);
}
console.log(twoSum_2([2, 7, 11, 15], 9));
//should return [0,1]

