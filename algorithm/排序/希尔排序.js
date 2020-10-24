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

// 希尔排序是一种插入排序的改进版算法 采用标记增量的方式对一个原始的数据进行分组插入排序
// 希尔排序又是如何优化的喃？
// 希尔排序又叫缩小增量排序，就是把数列进行分组(组内不停使用插入排序)，直至从宏观上看起来有序，最后插入排序起来就容易了(无须多次移位或交换)。
// 其中组的数量称为 增量 ，显然的是，增量是不断递减的(直到增量为1)
// 那我们有是如何进行分组喃？
// 往往的： 如果一个数列有 8 个元素，我们第一趟的增量是 4 ，第二趟的增量是 2 ，第三趟的增量是 1 。如果一个数列有 18 个元素，我们第一趟的增量是 9 ，第二趟的增量是 4 ，第三趟的增量是2 ，第四趟的增量是 1
// 很明显我们可以用一个序列来表示增量：n/2、(n/2)/2、...、1，每次增量都/2
function hillSort (arr) {
  let n = arr.length
  // 增量值循环 每次增量都是之前的一半 
  for (let gap = Math.floor(n/2);gap>0;gap = Math.floor(n/2)) {
    // 得知gap之后 之后的步骤就和插入排序类似了 只是每次的间距不是像之前一样移动一格而是移动gap
    for (let i =gap;i<n;i++) {
       let j = i
       let curr = arr [i]
       while(j-gap>=0 && curr < arr[j-gap]) {
        arr[i] = arr[j-gap] 
        j = j-gap
       }
       arr[j] = current
    }
  }
  return arr
}