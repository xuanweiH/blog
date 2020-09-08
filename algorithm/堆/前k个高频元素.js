// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]
// 提示：

// 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
// 你的算法的时间复杂度必须优于 O(nlogn) , n 是数组的大小。
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
// 你可以按任意顺序返回答案。

// 方法1 map结构 记录出现的词的频率
// 时间复杂度：O(nlogn)
function getTimesK(arr,k) {
  let map = new Map(), nums = [...new Set(arr)]
  arr.forEach(item => {
      if (map.has(item)) map.set(item,map.get(item)+1)
      else map.set(item,1)
  })
  // 根据map.get的值进行降序
  return nums.sort((a,b)  => map.get(b)-map.get(a)).slice(0,k)
}

// map + 小顶堆
// map通过key value 存出现的频率数 
// 使用key 所对应的value来构建一个小顶堆 得到频率更高的就替换堆顶 再进行堆化
// 最后通过map反得key 
let getFreQ = (arr,k) => {
   let map = new Map(),heap = [,]
   arr.forEach(num => {
       if (map.has(num)) map.set(num,map.get(num)+1)
       else map.set(num,1)
   })
   if (map.size <= k) {
       return [...map.keys()]
   }
   let i = 0
   map.forEach((key,value) => {
     if (i<k) {
        heap.push(key)
        if (i === k-1) build(heap,map,k)
     } else if (map.get(head[1] < value)) {
        heap[1] = value
        heapify(heap,map,k,1)
     }
     i++
   })
   heap.shift()
   return heap
}
let build = (heap,map,k) => {
  if (k===1) return
  for (let i=Math.floor(k/2);i>=1;i--) {
      heapify(heap,map,k,i)
  }
}
let heapify = (heap,map,k,i) => {
    while(true) {
        let minIndex = i
        if (i*2<=k && map.get(heap[i*2])<map.get(heap[i])){
           minIndex = i*2
        }
        if (i*2+1<=k && map.get(heap[i*2+1]<map.get(heap[minIndex]))) {
            minIndex = i*2+1
        }
        if (i!==minIndex) {
            swap(heap, i, minIndex)
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