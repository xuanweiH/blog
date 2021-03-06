// 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
// 例如，
// [2,3,4] 的中位数是 3
// [2,3] 的中位数是 (2 + 3) / 2 = 2.5
// 设计一个支持以下两种操作的数据结构：
// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。
// 示例：
// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3) 
// findMedian() -> 2
// 进阶:
// 如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
// 如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？

// 维护一个由大顶堆和小顶堆的合成数据结构
// 数组的前k/2小 项放在大顶堆 堆顶就为中位数
// 后k/2的数放在小顶堆 如果数组长度为奇数 则中位数为堆顶元素 如果数组长度为偶数 则中位数是大顶堆+小顶堆对顶元素/2
// 插入元素后 如果插入元素比大顶堆的元素要大则放入小顶堆中,如果小则放进大顶堆中
// 为了保持堆的平衡性 则移动堆顶到另一个堆中 平衡性指高度差小于1

let MidHeap = function () {
    this.bigHeap = new MaxHeap()
    this.smallHeap = new MinHeap()
}
// 插入元素
MidHeap.prototype.addNum = function (num) {
    // 如果比大顶堆要大 说明要放入小顶堆中
   if (!this.bigHeap.size() || num> this.bigHeap.getMax()) {
       this.smallHeap.insert(num)
   } else {
       this.bigHeap.insert(num)
   }
   // 平衡
   if (this.bigHeap.size() - this.smallHeap.size()>1) {
       // 如果大顶堆比小顶堆多了 移除头部到小顶堆
       this.smallHeap.insert(this.bigHeap.removeHead())
   }
   if (this.smallHeap.size() > this.bigHeap.size()) {
    // 如果大顶堆比小顶堆多了 移除头部到小顶堆
    this.bigHeap.insert(this.smallHeap.removeHead())
    }
}
// 获取中位
MidHeap.prototype.findMedian = function () {
  if (this.bigHeap.size() && this.bigHeap.size()===this.smallHeap.size()) {
      return (this.bigHeap.getHead() + this.smallHeap.getHead())/2
  }
  return this.bigHeap.getHead()
}
// ------------------
// 大顶堆构造函数
function MaxHeap() {
    let heap = [,]
    this.size = () => heap.length -1
    this.insert = (val) => {
      heap.push(val)
      let i = heap.length -1
      if (Math.floor(i/2)>0 && heap[i]>heap[Math.floor(i/2)]) {
         swap(heap,i,Math.floor(i/2))
         i = Math.floor(i/2)
      }
    }
    this.getHead = () => {
        return heap.length>1? heap[1] : null
    }
    this.removeHead = () => {
        if (heap.length>1) {
            if(heap.length === 2) return heap.pop()
            let num = heap[1]
            heap[1] = heap.pop()
            heapify(1)
            return num
        }
        return null
    }
    let heapify = (i) => {
        let k = heap.length -1
        while(true) {
            let maxIndex = i
            if (2*1<=k && heap[2*i]>heap[i]){
                maxIndex = 2*i
            }
            if (2*i+1<=k && heap[2*i+1]>heap[maxIndex]) {
                maxIndex = 2*i+1
            }
            if (i!==maxIndex) {
                swap(heap, i, maxIndex)
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
}
// --------------------
// 小顶堆构造函数
function MinHeap () {
    let heap = [,]
    this.size = () => heap.length -1
    this.insert = (val) => {
        heap.push(val)
        let i = heap.length -1
        if (Math.floor(i/2)>0 && heap[i]<heap[Math.floor(i/2)]) {
            swap(heap, i, Math.floor(i/2))
            i = Math.floor(i/2)
        }
    }
    this.getHead = () => {
        return heap.length>1 ? heap[1]:null
    }
    this.removeHead = () => {
        if (heap.length > 1) {
           if (heap.length === 2) {
               return heap.pop()
           }
           let num = heap[1]
           heap[1] = heap.pop()
           heapify(1)
           return num
        }
        return null
    }
    let heapify = (i) => {
       let k = heap.length -1
       while(true) {
         let minIndex = i 
         if (i*2<=k && heap[i*2]<heap[i]) {
            minIndex = i*2
         }
         if (i*2+1<=k && heap[i*2+1]<heap[minIndex]) {
             minIndex = i*2+1
         }
         if (i!== minIndex) {
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

}
