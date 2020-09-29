// 冒泡排序
// 思路 两次循环 每一轮找到一个最小值

function sort (arr) {
   for (let i=0;i<arr.length;i++) {
      for (let j=i+1;j<arr.length;j++) {
          if (arr[j]>arr[i]) {
              swap(arr,i,j)
          }
      }
   }
   console.log(arr)
}

function swap (arr,i,j) {
    let temp = arr[i]
    arr[i] = arr [j]
    arr[j] = temp
}

sort([1,5,6,3,2,0])