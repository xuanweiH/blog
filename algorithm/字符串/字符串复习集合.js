// 字符串复习之 判断回文字符串
// api版本 
// function isCircle(str) {
//   return str.split('').rerverse().join('') === str
// }
// // 指针版本
// function isCir(str) {
//    if(typeof str !== 'string') return false
//    let l = 0, r = str.length -1
//    while(l<r) {
//        if(str.charAt(l) !== str.charAt(r)) return false
//        l++;
//        r--;
//    }
//    return true
// }

// 字符串复习之 翻转字符串里面的单词
// api+正则
// 先去掉首尾空格 再把多空格转换一个空格 根据空格切分数组 翻转 再返回
function reverseWord(str) {
  return str.trim().replace(/\s+/g, ' ').split(' ').reverse().join()
}

//指针
// 先去重 -> 当遇到' '时 且word存在的 把单词推入头部 否则把字母拼接上去 最后加入一次word 再进行翻转转字符串
function reverseWord1(str) {
  let l = 0, r = str.length -1
  let queue = [] 
  let word = ''
  while(str.chatAt(l) === " ") l++
  while(str.chatAt(r) === " ") r--
  while(l<r) {
     let chat = str.chatAt(l)
      if(chat=== ' ' && word) {
          queue.unshift(chat)
          word = ''
      }else if( chat !== ' ') {
          word += chat
      }
      l++
  }
  queue.unshift(word)
  return queue.reverse().join(' ')
}

// 字符串相加
function strSum(str1, str2) {
  let a = str1.length-1, b=str2.length-1, tmp=0, res = ''
  while(a || b) {
    a ? tnp += str[--a] : ""
    b ? tmp += str[--b] : ""
    res = tmp%10 + res
    if(tmp>9) tmp = 1
    else tmp = 0
  }
  if(tmp) res= 1+res
  return res
}










// 
function isCir(str) {
   return str === str.split('').reverse().join()
}
// 
function isCir1(str) {
  let l=0, r=str.length-1
  if(typeof(str) !== 'string') return false
  while(l<r) {  
    if(str.chatAt(l) !== str.chatAt(r)) return false
    l++
    r--
  }
  return true
}
// 
function isword(str) {
  return str.trim().replace(/\s+/g, ' ').split(' ').reverse().join()
}
// 
function isword(str) {
  let l = 0, r=str.length-1
  let word = ''
  let queue = []
  while(l<r) {
    while(str.chatAt(l) === ' ') l++
    while(str.chatAt(r) === ' ') r--
    let chat = str.chatAt(l)
    if(chat ===' ' && word) {
       queue.unshift(word)
       word = ''
    } else if(chat !== ' ') {
      word+=chat
    }
    l++
  }
  queue.unshift(word)
  queue.reverse().join(' ')
}