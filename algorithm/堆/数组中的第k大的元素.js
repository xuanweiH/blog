// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
// 说明:

// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

// 老方法 排序取k
function getK (arr,k) {
   arr.sort((a,b) => b-a)
   return arr[k-1]
}

// 造堆 小顶堆取堆顶元素
let getHeapK = (arr,k) => {
   let heap = [,], i=0
   while(i<k) {
       heap.push(arr[i++])
   }
   build(heap,k)
   for(let i=k;i<arr.length;i++) {
       if(heap[1]<arr[i]) {
           heap[1] = arr[i]
           heapify(heap,k,1)
       }
   }
   return heap[1]
}
let build = (arr,k) => {
    if(k===1) return
    for(let i = Math.floor(k/2);i>=1;i--){
        heapify(arr,k,i)
    }
}
let heapify = (arr,k,i) => {
    while(true) {
      let minIndex = i
      if (i*2<=k && arr[i*2]<arr[i]) {
          minIndex = i*2
      }
      if (i*2+1<=k && arr[i*2+1]<arr[minIndex]) {
          minIndex = i*2+1
      }
      if (minIndex !== i) {
         swap(arr,minIndex,i)
         i = minIndex
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