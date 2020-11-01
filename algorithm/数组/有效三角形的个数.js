// 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。

// 示例 1:

// 输入: [2,2,3,4]
// 输出: 3
// 解释:
// 有效的组合是: 
// 2,3,4 (使用第一个 2)
// 2,3,4 (使用第二个 2)
// 2,2,3
// 注意:

// 数组长度不超过1000。
// 数组里整数的范围为 [0, 1000]。

// 三角形两边之和大于第三边, 两边之差小于第三边
// 思路 双指针
// 类似于三数之和, a[i]+a[j]>a[k]
// 双指针 i j 如果a[i]+a[j]>a[k] 满足,则记为1组
function triangleCount(arr) {
    if (!arr || arr.length<3) return 0
    let count = 0
    arr.sort((a,b) => a-b)
    for (let k = arr.length - 1; k > 1; k--) {
        let i = 0, j = k-1
        while(i<j) {
            if (arr[i]+arr[j]>arr[k]) {
                count += 1
                j--
            } else {
                i++
            }
        }
    }
    return count
}
console.log(triangleCount([2,3,3,4]))
// [2,3,3,4,5,6]
// 233 234 334 335 345 346 356 456
