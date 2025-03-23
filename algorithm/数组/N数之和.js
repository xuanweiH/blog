// 请用算法实现，从给定的无需、不重复的数组A中，取出N个数，使其相加和为M。并给出算法的时间、空间复杂度，如：

// var arr = [1, 4, 7, 11, 9, 8, 10, 6];
// var N = 3;
// var M = 27;

// Result:
// [7, 11, 9], [11, 10, 6], [9, 8, 10]


// 二进制枚举法的时间复杂度是O(2^L * L)，空间复杂度是O(N)存储当前组合。
function findCombinationsBinary(arr, N, M) {
    const result = [];
    const len = arr.length;
    const total = 1 << len; // 2^len
    for (let i = 1; i < total; i++) { // 从1开始，跳过全0  // 遍历所有可能的二进制掩码（1<<len个组合）
           // ◼ 关键步骤1：检查当前子集是否包含N个元素
        // 将i转换为二进制字符串（如5 → "101"）
        // 将二进制分割成字符数组（如["1","0","1"]）
        // 过滤数组中值为"1"的字符（选中状态位）
        // 统计这些"1"的数量（即选中元素的总数量）
        
        const bits = i.toString(2).split('').filter(b => b === '1').length;
              // 如果当前子集的元素数量不等于N，则跳过当前循环
        if (bits !== N) continue;
        const combination = [];
        let sum = 0;
        for (let j = 0; j < len; j++) {  // 遍历所有元素的位下标（数组第j个元素的位置
            if (i & (1 << j)) { // 若掩码i的第j位是1 → 选中该元素
                combination.push(arr[j]);
                sum += arr[j];
            }
        }
        if (sum === M) {
            result.push(combination);
        }
    }
    return result;
}



function findCombinationsBinary(arr, N, M) {
    const len = arr.length
    const total = 1 << len
    const res = []
    for(let i=0;i<total;i++) { // / 遍历所有可能的二进制掩码（1<<len个组合）
        // huo qu wei
        const bit = i.toString(2).split('').filter(b => b === '1').length // 二进制中1的位数
        if (bit !== N) continue
        let sum = 0;
        const combination = []
        for(let j = 0;j<len;j++) { // 遍历所有元素的位下标（数组第j个元素的位置）
            if (i& (1<<j)) { // 若掩码i的第j位是1 → 选中该元素
                combination.push(arr[j])
                sum+=arr[j]
            }
        }
        if (sum === M) {
            res.push(combination);
        }
    }
    return res

}



// 回溯法的时间复杂度是O(C(L, N))，空间复杂度是O(N)（递归栈）。
// 回溯法（推荐）
// 实现思路
// 1.排序剪枝：先对数组排序，便于提前终止无效搜索（若当前和加上剩余元素的最小值已超过 M，则无需继续）。
// 2.递归回溯：从起始位置依次选择元素，记录当前组合的和与元素数量。当组合长度达到 N 且和为 M 时，保存结果。
// 3.剪枝优化：若当前和加上后续元素的最小值已超过 M，直接终止循环。

function findCombinations(arr, N, M) {
    arr.sort((a, b) => a - b); // 排序便于剪枝
    const result = [];
    
    const backtrack = (start, path, sum) => {
        if (path.length === N) {
            if (sum === M) result.push([...path]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            // 剪枝：若当前和 + 剩余元素的最小可能已超过 M，终止
            if (sum + arr[i] * (N - path.length) > M) break;
            path.push(arr[i]);
            backtrack(i + 1, path, sum + arr[i]);
            path.pop();
        }
    };
    
    backtrack(0, [], 0);
    return result;
}

// 示例调用
const arr = [1, 4, 7, 11, 9, 8, 10, 6];
console.log(findCombinations(arr, 3, 27)); 
// 输出：[[7,9,11], [6,10,11], [8,9,10]]







function findCombinations(arr, N, M) {
    arr.sort((a, b) => a - b); // 排序便于剪枝
    const result = [];
    const back = (start, path, sum) => {
       if (path.length === N) {
        if (sum === M) result.push([...path]);
        return;
       }
       for(let i = start; i < arr.length; i++) {
        if (sum + (N-path.length)*arr[i] > M) break
        path.push(arr[i])
        back(i+1,path,sum+arr[i])
        path.pop()

       }
    }
    back(0, [], 0)
    return result;
}