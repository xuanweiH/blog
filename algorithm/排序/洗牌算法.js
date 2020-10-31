// 早前的 chrome 对于元素小于 10 的数组会采用插入排序，这会导致对数组进行的乱序并不是真正的乱序，
// 即使最新的版本 chrome 采用了原地算法使得排序变成了一个稳定的算法，对于乱序的问题仍没有解决

// 洗牌算法 打乱排序

// 方法1 原地洗牌
// 思路 遍历数组 当前数与后面的一个随机数进行交换 打乱排序
function shuffle (arr) {
   for (let i = 0; i< arr.length; i++) {
       let swapIndex = i + Math.floor(Math.random() * (arr.length - i));
       [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
   }
   return arr
}
console.log(shuffle([1,2,6,5,4,7,8,3,2]))

// 方案2 借助新变量排序
// 旧数据打断截取某段的第一个数字放进新数组
function shuffle (arr) {
    let _arr = []
    while(arr.length) {
        let swapIndex = Math.floor(Math.random() * (arr.length));
        _arr.push(arr.splice(swapIndex,1)[0])
    }
    return _arr
}