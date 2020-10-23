// 希尔排序是一种插入排序的改进版算法
// 1959年Shell发明，第一个突破 O(n^2^) 的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。
// 插入排序
// 插入排序的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入

// 先回顾一下插入排序 
// 插入排序的核心思路就是拿一个数和前面的对比 比之大或者小就插入到前一个数之前
function insertSort (arr) {
    let preIndex, current
    for (let i=1;i<arr.length;i++) {
      preIndex = i - 1
      current = arr[i]
      while(preIndex >= 0 && arr[preIndex] > current) {
         arr[preIndex + 1] = arr[preIndex]
         preIndex--
      }
      arr[preIndex+1] = current
    }
    return arr
}