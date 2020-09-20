// 快速排序思路
// 首先找到一个基准点 然后定义两个指针
// 将比基准点大 放在右边
// 比基准点小的  放在左边
// 以此类推 分块后再次找到基准点进行 快排递归执行 

function quick_sort (arr,left,right) {
  if (left>=right) return
  let partitionIndex = partition(arr,left,right)
  quick_sort(arr,left,partitionIndex-1)
  quick_sort(arr,partitionIndex+1,right) 
  
  // console.log(arr)
}

function partition (arr, left, right) {
  let leftIndex = left
  let rightIndex = right-1
  // 设置最右边的元素为基点
  let pivot = arr[right]
  while (1) {
      //   保证arr[leftIndex]都是比基点小的
      while(leftIndex<right && arr[leftIndex] <= pivot) {
        leftIndex++
      }
      //保证arr[leftIndex]都是比基点大的
      while(rightIndex>=left && arr[rightIndex]>pivot) {
        rightIndex--
      }
    //   如果超出边界就结束
      if (leftIndex>rightIndex) break
      // 如果没有超出边界能进到这里说明当前arr[leftindex]比pivot大了
      // 说明当前arr[rightIndex]比pivot小了
      //  交换 左右值的位置
      swap(arr,leftIndex,rightIndex)
  }
  // 超出边界说明 此时是第一个比privot大的左边元素出现了 此时leftIndex往左的元素都已经排好
  // 此时再交换左边和右边的值 同时返回leftindex 供递归调用
  swap(arr,leftIndex,right)
  return leftIndex
}

function swap (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
let arr = [1,5,2,4,9,3]
quick_sort(arr,0,5)
console.log(arr)