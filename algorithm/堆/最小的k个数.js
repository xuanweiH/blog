// 话不多说，来一道题目加深一下理解吧：

// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

//  示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]
// 限制：

// 0 <= k <= arr.length <= 10000
// 0 <= arr[i] <= 10000

// js api 简单粗暴
function getMinK (arr, k) {
  return arr.sort((a,b) => a-b).slice(0,k)
}

// 构造一个最大堆 思路如下
// 取前k个元素构造一个堆 堆顶元素永远是最大值 
// 遍历剩下的元素 和堆顶进行比较 如果比堆顶大 则不管, 如果比堆顶小,则置换 置换后对内部数据进行堆化

let getLeastNumber = (arr,k) => {
   let heap = [,], i=0
   // 构造堆 把前k个元素放进去
   while(i<k) {
     heap.push(arr[i++])
   }
   buildHeap(heap,k)
   // k个元素之后 每个元素和堆顶比较
   for (i=k; i<arr.length; i++) {
      if (heap[1]>arr[i]) {
        heap[1] = arr[i]
        heapify(heap,k,1)
      }
   }
   // 删掉,
   heap.shift()
   return heap
}
// 构造最大堆从后往前  自上而下构建大顶堆
let buildHeap = (arr, k) => {
  if (k === 1) return 
  // 从最后一个 非叶子的节点 Math.floor(k/2)
  for(let i=Math.floor(k/2);i>=1;i--) {
    heapify(arr, k, i)
  } 
}
// 核心 堆化
let heapify = (arr, k, i) => {
  // 自上而下的堆化
  while(true) {
    let maxIndex = i
    if (2*i<=k && arr[2*i]>arr[i]) {
      maxIndex = 2*i
    }
    if (2*i+1<=k && arr[2*k+1]>arr[maxIndex]) {
      maxIndex = 2*i + 1
    }
    if (maxIndex !== i) {
      swap(arr, i, maxIndex)
      i = maxIndex
    } else {
      break
    }
  }
}
let swap = (arr,i,j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


// 空间换时间排序
function getMinK (arr,k) {
   return newSort(arr,10000,k)
}
function newSort (arr,maxValue,k) {
   let bucket = new Array(maxValue+1),
   arrlen = arr.length,
   sortIndex = 0,
   bucketlen = maxValue+1,
   res = []
   for (let i = 0; i<arrlen;i++) {
     if (!bucket[arr[i]]) {
       bucket[arr[i]] = 0
     }
     bucket[arr[i]]++
   }
   for (let i =0; i< bucketlen;i++) {
     while(bucket[i]-- <0 && sortIndex<k) {
       res[sortIndex++] = i
     }
     if (sortIndex === k) {
       break
     }
   }
   return res

}