// 给定一个按照升序排列的整数数组 nums ，和一个目标值 target 。找出给定目标值在数组中的开始位置和结束位置。

// 你的算法时间复杂度必须是 O(logn) 级别。

// 如果数组中不存在目标值，返回 [-1, -1] 。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]

// 思路: 二分查找 从
function findItem(nums, target) {
  return [leftSearch(nums, target),rightSearch(nums, target)]
}
console.log(findItem([5,7,7,8,8,10],8))
function leftSearch(nums, target) {
  // 定义首尾index low high
  let low = 0, high = nums.length-1
  let mid
  while (low<=high) {
      // 定义中间index 二分 mid
      mid = Math.floor((low+high)/2)
      // 如果目标大于 二分中值 移动左边界
      if (nums[mid]<target) {
          low = mid + 1
        //   反之移动右边界
      } else if (nums[mid]>target) {
          high = mid -1
      } else {
          // 相等的时候 取到右边界
          high = mid - 1
      }
  }
  if (low>=nums.length || nums[low] !== target) return -1
  return low
}

function rightSearch(nums, target) {
  let low = 0, high = nums.length-1
  let mid
  while (low<=high) {
      mid = Math.floor((low+high)/2)
      if (nums[mid]<target) {
          low = mid + 1
      } else if (nums[mid]>target) {
          high = mid -1
      } else {
          low = mid + 1
      }
  }
  if (high<0 || nums[high] !== target) return -1
  return high
}