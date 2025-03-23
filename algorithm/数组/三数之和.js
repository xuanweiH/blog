// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？
// 请你找出所有满足条件且不重复的三元组。

// 注意： 答案中不可以包含重复的三元组。

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 思路 判断这个数组 如果少于三个元素那肯定不存在
// 给数组排个序 再去个重
// 找到第二个数,最后一个数,再用双指针平推

// function threeSum(nums) {
//   if (nums.length<3) return []
//   nums.sort((a,b) => a-b)
//   let res = [], second, last
//   for (let i=0;i<nums.length;i++) {
//     if (nums[i]>0) break
//      if(i>0 && nums[i-1] === nums[i]) continue
//      second = i+1
//      last = nums.length -1
//      while(second < last) {
//        let sum = nums[i] + nums[second] + nums[last]
//        if (!sum) {
//          res.push([nums[i],nums[second], nums[last]])
//          while(second<last && nums[second+1]===nums[second]) second++
//          while(second<last && nums[last-1] ===nums[last]) last--
//          second++
//          last--
//        } else {
//         if (sum < 0) second++
//         if (sum>0) last--
//        }
//      }
//   }
//   return res
// }


// 三数之和 解题思路
// nums 先把这个数组排序
// 然后判断是否长度大于3
// 然后进行判断 是否有重复项 有重复项去除
// 两个指针 second和last 推移 然后再去重

// function threeSums(nums) {
//    if (nums.length<3) return []
//    nums.sort((a,b) => a-b)
//    let res = [], second, last
//    for(let i=0;i<nums.length;i++) {
//     if(i>0 && nums[i-1] === nums[i]) continue
//     second = i+1
//     last= nums.length-1
//     while(second<last) {
//       let sum = nums[i] + nums[second] + nums[last]
//       if (!sum) {
//          res.push([nums[i], nums[second], nums[last]])
//          while(second<last && nums[second] === nums[second+1]) second++
//          while(second<last && nums[last] === nums[last-1]) last--
//          second++
//          last--
//       } else {
//         if(sum>0) last--
//         if(sum<0) second++
//       }
//     }
//    }
//    return res
// }




// function threeSums (nums) {
//    if (nums.length < 3) return []
//    nums.sort((a,b) => {return a - b})
//    let res = [], second, last
//    for (let i=0; i<nums.length; i++) {
//        if (nums[i]>0) break
//        if (i>0 && nums[i-1]===nums[i]) continue
//        second = i+1
//        last = nums.length -1
//        while(second<last) {
//            let sum = nums[i] + nums[second] + nums[last]
//            if (!sum) {
//              res.push([nums[i], nums[second], nums[last]])
//              while(second<last && nums[second+1] === nums[second]) second++
//              while(second<last && nums[last-1] === nums[last]) last--
//              second++
//              last--
//            } else {
//               if (sum < 0) second++
//               if (sum > 0) last--
//            }
//        }
//    }
//    return res
   
// }


// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 
// 满足 i != j、i != k 且 j != k ，
// 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。


//这道题经典的是细节，需要考虑蛮多细节的
//解法：
//1.暴力破解，三层枚举，O（n^3）效率太低不考虑
//2.a+b+c = 0，转换思路，a+b = -c，这不就是两数之和嘛？
//3.利用双指针夹逼，但是怎么避免重复呢？
//3.1 排序即可，利用排序好的数组，固定一个指针i，夹逼选举left和right
//3.2 这道题难度在于要考虑的细节太多，多想想即可。
//3.3 扩展一下，如果是4数之和，五数之和，N数之和呢？怎么解决？

function threeSums (nums) {
    nums.sort((a,b) => {return a-b})
    if (nums.length < 3 ) return
    for (let i=0;i<nums.length;i++) {
        let left = i+1;
        let right = nums.length-1
        let res = []
        if(nums[i] >0) break
        if (i && nums[i]===nums[i-1]) continue
        let sum = nums[i]+nums[left]+nums[right]
        while(left<right) {
           if (sum===0) {
              res.push([nums[i],nums[left],nums[right]])
              while (nums[left]===nums[left-1]) {
                left++
              }
              while (nums[right]===nums[right-1]) {
                right--
              }
           } else if (sum>0) {
            right--}else{
                left++
            }
        }
     

    }
    return res
}