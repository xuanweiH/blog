// 归并算法  merge_sort
// 核心思路  将一个数组分为两个子数组,
// 通过递归重复将数组切分到只剩下一个元素为止,
// 然后将每个子数组中的最大元素排序后合并,
// 通过不断合并子数组,最后就会拿到一个排好序的大数组.

// 分而治之

// 递归实现步骤
// 1.递归切分当前数组
// 2.如果当前数组数量少于等于1 无需排序,直接返回结果
// 3.否则将当前数组分为两个子数组,递归排序这个两个子数组
// 4.在子数组排序结束后,将子数组的结果归并为排好序的数组

// function mergeSort (arr) {
//     let len = arr.length
//     if (len < 2) {
//         return arr
//     }
//     let middle = Math.floor(len/2)
//     //拆分成两个子数组
//     let left =  arr.slice(0, middle)
//     let right = arr.slice(middle,len)
//     //递归拆分
//     let mergeSortLeft = mergeSort(left)
//     let mergeSortRight = mergeSort(right)
//     //合并
//     return merge( mergeSortLeft,mergeSortRight)
// }
// const merge = (left, right) => {
//     const result = [];

//     while (left.length && right.length) {
//         // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
//         if (left[0] <= right[0]) {
//             result.push(left.shift()); //每次都要删除left或者right的第一个元素，将其加入result中
//         } else {
//             result.push(right.shift());
//         }
//     }
//     //将剩下的元素加上
//     while (left.length) result.push(left.shift());

//     while (right.length) result.push(right.shift());

//     return result;
// };
// let arr = [1,4,2,5,3,6]
// console.log(mergeSort(arr))
// console.log(arr)




/// 归并排序 练习 
// 思路 递归拆分 递归合并
// 拆分
// [1,4,2,5]  [1,4] [2,5] [1][4][2][5]
function mergeSort(arr) {
  let len = arr.length
  if(len < 2) return arr
  let partIndex = Math.floor(len/2)
  let left = arr.slice(0,partIndex)
  let right = arr.slice(partIndex,len)
  let leftRes = mergeSort(left)
  let rigtRes = mergeSort(right)
  return merge(leftRes,rigtRes)
}
// 合并
function merge(left, right) {
  console.log('left',left)
  console.log('right',right)
  const res = []
  while(left.length && right.length) {
     if (left[0]>right[0]) {
         res.push(right.shift())
     } else {
         res.push(left.shift())
     }
  } 
  while(left.length) res.push(left.shift())
  while(right.length) res.push(right.shift())
  console.log(res)
  return res 
}
let arr = [1,4,2,5]
console.log(mergeSort(arr))
