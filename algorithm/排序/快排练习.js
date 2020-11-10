// 快速排序
// 找到一个基准点, 比基准点小的排序, 比基准点大的排序
// 基于基准点的index左右划分后再一次递归
// function quick_sort (arr, left, right) {
//     if (left>=right) return
//    let quickIndex = partition(arr,left,right)
//    quick_sort(arr,quickIndex+1,right)
//    quick_sort(arr,left,quickIndex-1)
// }

// function partition (arr, left, right) {
//    let leftIndex = left
//    let rightIndex = right -1
//    let privot = arr[rightIndex]
//    while(true) {
//        if (lefrIndex<right && arr[leftIndex]<=privot) {
//            leftIndex++
//        }
//        if (lefrIndex>=left && arr[rightIndex]>privot) {
//           rightIndex--
//        }
//        if (leftIndex>rightIndex) break
//         swap(arr, leftIndex, rightIndex)
//    }
//    swap(arr,leftIndex,right)
//    return leftIndex
// }

// function swap (arr,i,j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }


// 快排
// let quickSort = (arr) => {
//   quick(arr, 0, arr.length-1)
//   return arr
// }
// let quick = (arr,left,right) => {
//   let index
//   if (left<right) {
//       index = partion(arr,left,right)
//       if(left<index-1) quick(arr,left,index-1)
//       if (index< right) quick(arr,index,right)
//   }
// }
// let partion = (arr,left,right) => {
//    let privot = arr[Math.floor(Math.random() * (right - left + 1)) + left]
// //    let privot = arr[left]
//    let i = left,j=right
//    while(i<=j) {
//       while(arr[i]<privot) {
//           i++
//       }
//       while(arr[j]>privot) {
//           j--
//       }
//       if (i<=j) {
//           swap(arr,i,j)
//           i+=1
//           j-=1
//       }
//    }
//    return i
// }
// let swap = (arr,i,j) => {
//     [arr[i],arr[j]] = [arr[j],arr[i]]
//     // return arr
//     // let temp = arr[i]
//     // arr[i] = arr[j]
//     // arr[j] = temp
// }


// console.log(quickSort([1,5,56,2,4,3]))



// 用额外空间来存的快排
let quickSort = (arr) => {
    if (arr.length<=1) return arr
    let pivotIndex = Math.floor(arr.length/2)
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [],right= [],i=0
    while(i<arr.length) {
        if (arr[i]<pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i]);
        }
        i++
    }
    return  quickSort(left).concat([pivot], quickSort(right));
}
// 2 
console.log(quickSort([1,5,56,2,4,3]))



// 原始快排练习

function quickSort(arr) {
  quick(arr,0,arr.length-1)
}

function quick(arr,left,right) {
   if (left>=right) return
   let index = partion(arr,left,right)
   if (left<index-1) quick(arr,left,index-1)
   if(index<right) quick(arr,index,right)
}

function partion(arr,left,right) {
//    let privot = arr[left]
    let privot = Math.floor((Math.random()*(right-left+1))+left)
    let i = left, j = right
    while(i<=j) {
        while (arr[i]<arr[privot]) {
           i++
        } 
        while(arr[j]<arr[privot]) {
            j--
        }
        if (i<=j) {
            swap(arr,i,j)
            i+=1
            j-=1
        }
    }
    return i
}

function swap(arr,i,j) {
  [arr[i],arr[j]] = [arr[j],arr[i]]
}