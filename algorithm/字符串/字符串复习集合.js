// 字符串复习第几遍系列

// 1. 一个字符串出现最多的字符以及次数
function count(str) {
  let arr = str.split('')
  let obj = {}
  let s = arr[0]
  let max = 1
  for(let i=0; i<arr.length; i++) {
    if(obj[arr[i]]) {
      let count = obj[arr[i]]++
      if(count > max) {
        max = count
        s = arr[i]
      }
    } else {
      obj[arr[i]] = 1
    }
  }
  return [max ,s]

}