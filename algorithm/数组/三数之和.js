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

function threeSums(nums) {
   if (nums.length<3) return []
   nums.sort((a,b) => a-b)
   let res = [], second, last
   for(let i=0;i<nums.length;i++) {
    if(i>0 && nums[i-1] === nums[i]) continue
    second = i+1
    last= nums.length-1
    while(second<last) {
      let sum = nums[i] + nums[second] + nums[last]
      if (!sum) {
         res.push([nums[i], nums[second], nums[last]])
         while(second<last && nums[second] === nums[second+1]) second++
         while(second<last && nums[last] === nums[last-1]) last--
         second++
         last--
      } else {
        if(sum>0) last--
        if(sum<0) second++
      }
    }
   }
   return res
}















function threeSums (nums) {
   if (nums.length < 3) return []
   nums.sort((a,b) => {return a - b})
   let res = [], second, last
   for (let i=0; i<nums.length; i++) {
       if (nums[i]>0) break
       if (i>0 && nums[i-1]===nums[i]) continue
       second = i+1
       last = nums.length -1
       while(second<last) {
           let sum = nums[i] + nums[second] + nums[last]
           if (!sum) {
             res.push([nums[i], nums[second], nums[last]])
             while(second<last && nums[second+1] === nums[second]) second++
             while(second<last && nums[last-1] === nums[last]) last--
             second++
             last--
           } else {
              if (sum < 0) second++
              if (sum > 0) last--
           }
       }
   }
   return res
   
}