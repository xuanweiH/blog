// 快速排序
// 找到一个基准点, 比基准点小的排序, 比基准点大的排序
// 基于基准点的index左右划分后再一次递归

function quick_sort (arr, left, right) {
    if (left>=right) return
   let quickIndex = partition(arr,left,right)
   quick_sort(arr,quickIndex+1,right)
   quick_sort(arr,left,quickIndex-1)
}

function partition (arr, left, right) {
   let leftIndex = left
   let rightIndex = right -1
   let privot = arr[rightIndex]
   while(true) {
       if (lefrIndex<right && arr[leftIndex]<=privot) {
           leftIndex++
       }
       if (lefrIndex>=left && arr[rightIndex]>privot) {
          rightIndex--
       }
       if (leftIndex>rightIndex) break
        swap(arr, leftIndex, rightIndex)
   }
   swap(arr,leftIndex,right)
   return leftIndex
}

function swap (arr,i,j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}