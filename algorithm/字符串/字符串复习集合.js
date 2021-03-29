// 字符串复习第几遍系列

// 1. 一个字符串出现最多的字符以及次数
function count(str) {
  let arr = str.split('')
  let obj = {}
  let s = arr[0]
  let max = 0
  for(let i=0;i<arr.length-1;i++) {
    if(obj[arr[i]]) {
      let count = obj[arr[i]]++
      if(count>max) {
        max = count
        s = arr[i]
      }
    } else {
      obj[arr[i]] = 0
    }
  }
  return [s, max]
}
// 2. 判断回文字符串
function isCir(str) {
  let l = 0;
  let r = str.length -1;
  while(l<=r){
    if(str.chatAt(l) !== str.chatAt(r)) return false
    l++
    r--
  }
  return true
}