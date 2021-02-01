// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]

// 思路 api一把梭
function getRes(nums1,nums2) {
   return [... new Set(nums1.filter(item => nums2.includes(item)))]
}

// 换一种实现
function getRes (nums1, nums2) {
  const map = {}, res = []
  nums1.forEach(element => {
    map[element] = true
  })
  nums2.forEach(item => {
      if (map[item]) {
          res.push(item)
      }
  })
  let res1 = [...new Set(res)]
  return res1
}

// 用set
var intersection = function(nums1, nums2) {
    var result = [];
    var set1 = new Set([...nums1]);
    var set2 = new Set([...nums2]);
    for (var i of set2) {
      if (set1.has(i)) {
         result.push(i);
      }
    }
    return result;
 };



 // set实现求数组交集
function intersection (nums1, nums2) {
   let res = []
   let set1 = new Set([...nums1])
   let set2 = new Set([...nums2])
   for(let item of set2) {
     if(set1.has(item)) {
       res.push(item)
     }
   }
   return res
}



// 数组求交集
// set方式
function getInsertio(nums1,nums2) {
  let arr1 = new Set([...nums1])
  let arr2 = new Set([...nums2])
  const res = []
  for(let item of arr1) {
    if(arr2.has(item)){
      res.push(item)
    }
  }
  return res
}