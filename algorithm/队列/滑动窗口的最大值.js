// 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 示例:
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7] 
// 解释:
// 滑动窗口的位置 最大值
// [1 3 -1] -3 5 3 6 7 3
// 1 [3 -1 -3] 5 3 6 7 3
// 1 3 [-1 -3 5] 3 6 7 5
// 1 3 -1 [-3 5 3] 6 7 5
// 1 3 -1 -3 [5 3 6] 7 6
// 1 3 -1 -3 5 [3 6 7] 7

// 提示：

// 你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
// 暴力解


// 优化解 双端队列
// 思路 维护一个队列存储 数组对应下标, 且保证队列的首位所存储index nums[index]一定是最大的,
// 再把这个数推进结果res中
function getMaxInWindow (nums,k) {
   let queue = [] // 用于储存下标
   let res = []
   for (let i=0; i<nums.length;i++) {
       // 如果当前下标已经超出下标k个 说明已经超过窗口范围
      if (i - queue[0] >= k) {
          queue.shift()
      }
      // 获取最大值下标在队列首
      while(nums[queue[queue.length-1]]<= nums[i]) {
        // 不断删除队列的尾部下标   
        queue.pop()
      }
      queue.push(i)
      // 从达到k开始 就要存储最大值了
      if (i >= k-1) {
        res.push(nums[queue[0]])
      }
   }
   return res
}
console.log(getMaxInWindow([1,3,-1],3))
