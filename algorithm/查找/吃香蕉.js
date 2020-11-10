// 珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。
// 珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。
// 如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。
// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。
// 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。
// 示例 1：
// 输入: piles = [3,6,7,11], H = 8
// 输出: 4
// 示例 2：
// 输入: piles = [30,11,23,4,20], H = 5
// 输出: 30
// 示例 3：
// 输入: piles = [30,11,23,4,20], H = 6
// 输出: 23
// 提示：
// 1 <= piles.length <= 10^4
// piles.length <= H <= 10^9
// 1 <= piles[i] <= 10^9

// 对于吃香蕉的速度来说 最小值low =1 最大值就是数组piles里面的最大值
// 二分查找
// 根据中值 如果花费的时间小于H 说明速度还可以加大 反之则降低高位数
// 吃香蕉练习


function eatBanana (piles, H) {
  // 吃香蕉练习
  let low = 1, high
  let maxVal
  for (let pile of piles) {
    maxVal = Math.max(maxVal, pile)
  }
  high = maxVal
  let mid = Math.floor((low+high)/2)
  while(low<high) {
    if (H<getTime(piles,mid)) {
      low = mid+1
    } else {
      high = mid
    }
  }
}
function getTime(piles,V) {
  let times
  for(let pile of piles) {
    times+= Math.ceil(pile/V)
  }
  return times
}
















function eatBanana (piles, H) {
  // 最大慢的速度 low 肯定是为1  最快速度 应该是数组中最大的香蕉树
  // 首先求最高的
  let maxVal
  for (let pile of piles) {
    maxVal = Math.max(pile,maxval)
  }
  let low = 1, high = maxVal
  while(low<=high) {
    let mid = Math.floor((low+high)/2)
    if (H < getTime(piles,mid)) {
      low = mid +1
    } else {
      high = mid
    }
  }
  return low

}
function getTime (piles, V) {
  let times = 0
  for (let pile of piles) {
    times += Math.ceil(pile/V)
  }
  return times
}





















function eatBanana(piles, H) {
  let low = 1, high
  let maxVal
  for (let pile of piles) {
      maxVal = Math.max(pile, maxVal)
  }
  high = maxVal
  while(low<high) {
      let mid = Math.floor((low+high)/2)
      if (calTime(piles, mid) > H) {
          low = mid + 1
      } else {
          high = mid
      }
  }
  return low
}

// 时间计算
function calTime(piles, speed) {
  let times = 0
  for(let pile of piles) {
      // 向上取整
    times += Math.ceil(pile/speed)
  }
  return times
}














