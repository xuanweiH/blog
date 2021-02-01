// 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

// 思路：es6 新api flat可以直接分解多维数组
// set 结构去重
// sort 排序
function getRes(arr) {
    let arr1 = arr.flat(4)
    let arr2 = Array.from(new Set(arr1))
    arr2.sort((a, b) => a - b)
    return arr2
}
var arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];
getRes(arr)

// 由于flat可能会存在兼容性问题
// 换一种思路使用reduce来实现flat
function flatten(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}


// 或者使用arr.some+concat
function newArray() {
    while (arr.some(Array.isArray)) {
        arr = [].concat(...arr)
    }
    arr = [...new Set(arr)].sort((a, b) => {
        return a - b
    })
    return arr
}
newArray()



// 数组扁平化的思路

// 1. flat 解构层数 返回新数组

// 2. 
function flatten(arr) {
  return arr.reduce((pre,cur) => {
      pre.concat(Array.isArray(cur)? flatten(cur):cur)
  }, [])
}