// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

// 思路 暴力解
// 第一个循环 循环出每个字符串
// 对于每个字符串 再用第一个字符串和后面的进行比较 不相等就退出循环 时间复杂度O(s) s为所有字符串总和
function getCommon (arr) {
    if (arr.length === 0) return ''
    let prevs = arr[0]
    for (let i = 0;i<arr.length;i++) {
        let j = 0
        for (;j<prevs.length && j<arr[i].length; j++) {
            if (prevs.chatAt(j) !== arr[i].chatAt(j)) break
        }
        prevs = prevs.subString(0, j)
        if (prevs === '') return ''
    }
    return prevs
}

// 思路 先找到数组中最长和最短的字符串
//  比较最长和最短的公共前缀

function getCommon (arr) {
    if (arr.length === 0) return ''
    if (arr.length === 1) return arr[0]
    let min = 0, max = 0
    for (let i =0;i<arr.length; i++ ) {
        if (arr[min]>arr[i]) min = i
        if (arr[max]<arr[i]) max = i
    }
    for (let j=0; j<arr[min].length;j++) {
        if (arr[min].chatAt(j) !== arr[max].chatAt(j)) {
            return arr[min].substring(0,j)
        }
    }
    return arr[min]
}


