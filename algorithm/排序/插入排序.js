// 插入排序 思路
// 从第二个数开始  和队列中的数从后往前比 如果比 当前数大则index+1 如果比当前数小 则把这个数插入队列
// 然后继续遍历后面的数
// 时间复杂度 o(n2) 空间o(1)
function insert_sort (arr) {
    for(var i = 1; i<arr.length;i++) {
       let cur = arr[i]
       let j = i-1
       while(j>=0 && cur<arr[j]) {
           arr[j+1] = arr[j]
           j--
       }
       arr[j+1] = cur
    }
        console.log(arr)

    return arr

}

// console.log(insert_sort([1,6,8,5,7,4,9]))
insert_sort([1,6,8,5,7,4,9])


// 插入排序练习
// 插入排序思路
// 从第二个元素开始每次都和之前的元素比较

function insert_sort (arr) {
   for (let i =1;i<arr.length;i++) {
       let cur = arr[i]
       let j = i-1 
       while(j>=0 && cur<arr[j]) {
           arr[j+1] = arr[j]
           j--
       }
       arr[j+1] = cur
   }
   return arr
}


// 插入排序的思路
// 从第二个数开始和之前的比,如果比他小就把之前的往后移动一位
function insert_sort(arr) {
    for (var i=1;i<arr.length;i++) {
        let cur = arr[i]
        let j = i-1
        while(j>=0 && cur<arr[j]) {
          arr[j+1] =arr[j]
          j--
        }
        arr[j+1] = cur
    }
    return arr
}