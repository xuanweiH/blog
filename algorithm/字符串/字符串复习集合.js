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
  return str.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
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

// 字符串相乘
function strmul(str1, str2) {
  // let i = str1.length-1, j = str2.length-1
  let res = []
  for(let i=0; i<str1.length-1;i++) {
    let tmp1 = str1[str1.length-1-j] // 尾数1
    for(let j=0; j<str2.length-1; j++) {
      let tmp2 = str2[str2.length-1] // 尾数2
      let pos = res[i+j]? res[i+j]+tmp1*tmp2 : tmp1*tmp2
      res[i+j] = pos%10
      pos>=10 && (res[i+j+1] = (res[i+j+1]? res[i+j+1]+Math.floor(pos/10): Math.floor(pos/10)))
    }
  }
  return res.reverse().join('')
}

// 一个字符串出现最多的字符以及次数
function max(str) {
  let obj = {}, arr = str.split(''), max = 1
  let s = arr[0]
  for(let i=0;i<str.length-1;i++) {
    if(obj[arr[i]]) {
      let count = ++obj[arr[i]]
      if(count > max) {
        s = arr[i]
        max = count
      }
    } else {
      obj[arr[i]] = 0
    }
  }
  return [s,max]
}
// 最长不重复的字符串长度
function getlength(str) {
  let arr = []
  let length = 0
  for(let item of str) {
    if(arr.includes(item)) {
      let index = arr.indexOf(item)
      arr.splice(0, index+1)
    }
    arr.push(item)
  }
  length = length>arr.length ? length:arr.length 
  return length
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
  return str.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
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

// 回文字符串判断
function iscir(str) {
  return str === str.split('').reverse().join('')
}
function iscir1(str) {
  let l = 0, r = str.length-1
  if(typeof(str) !== 'string') return false
  while(l<r) {
    if(str.chatAt(l) !== str.chatAt(r)) return false
    l++
    r--
  }
  return true
}
// 单词翻转
function word(str) {
  return str.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
}
function word1(str) {
  let l=0, r=str.length-1
  let queue = []
  let res = ''
  while(str.chatAt(l) === ' ') l++
  while(str.chatAt(r) === ' ') r--
  while(l<r) {
    let chat = str.chatAt(l)
    if(chat ===' ' && word) {
      queue.unshift(word)
      word = ''
    }else if(chat !== ' ') {
      word+= chat
    }
    l++
  }
  queue.unshift(word)
  return queue.reverse().join(' ')
}
// 字符串相加
function strsum(str1, str2) {
  let a = str1.length, b = str2.length
  let tmp = 0, res = ''
  while(a || b) {
    a? tmp+= str[--a]: ""
    b? tmp+= str[--b]: ""
    res = tmp%10 + res 
    if(tmp>9) tmp = 1
    else tmp = 0
  }
  if(tmp) res = 1+res
  return res
}
// 字符串相乘
function multi(str1, str2) {
  let res = []
  for(let i=0;i<str1.length-1;i++) {
    let tmp1 = str1[str1.length-1]
    for(let j=0;j<str2.length-1;j++) {
      let tmp2 = str2[str2.length-1-j]
      let post = res[i+j]? res[i+j]+tmp1*tmp2: tmp1*tmp2
      res[i+j] = post%10
      post>=10 && (res[i+j+1] = (res[i+j+1]? res[i+j+1]+Math.floor(post/10):Math.floor(post/10) ))
    }
  }
  return res.reverse().join('')
}


// 字符串回文
function ishui(str) {
  let l=0,r=str.length-1
  if(typeof(str) !== 'string') return false
  while(l<r) {
    if(str.chatAt(l)!==str.chatAt(r)) return false
    l++
    r--
  }
  return true
}
// 翻转单词
function isword(str) {
  let l=0,r=str.length-1
  let queue = []
  let word = ''
  while(l<r) {
    while(str.chatAt(l) === ' ') l++
    while(str.chatAt(r) === ' ') r--
    let chat = str.chatAt(l)
    if(chat === ' ' && word) {
      queue.unshift(word)
      word = ''
    } else if(chat!== ' ') {
      word+=chat
    }
    queue.unshift(word)
    return queue.reverse().join()
  }
}
// 字符串相加
function sum(str1,str2) {
  let a = str1.length-1, b = str2.length-1
  let tmp = 0, res = ''
  while(a||b) {
    a? tmp += str1[--a]: ""
    b? tmp += str2[--b]: ""
    res = tmp%10 + res
    if(tmp>9) tmp = 1
    else tmp = 0
  }
  if(tmp) res = 1+res
  return res
}
// 字符串相乘
function mul(str1,str2) {
 let res = []
 for(let i=0;i<str1.length-1;i++) {
   let tmp1 = str1[str1.length-1]
   for(let j=0;j<str2.length-1;j++) {
     let tmp2 = str2[str2.length-1]
     let pos = res[i+j] ? res[i+j] + tmp1*tmp2 : tmp1*tmp2
     res[i+j] = pos%10
     res[i+j+1] = (res[i+j+1] ? (res[i+j]+Math.floor(pos/10)): Math.floor(pos/10))
   }
 }
 return res.reverse().join('')
}
// 字符串出现最多的次数
function max(str) {
  let obj = {}
  let arr = str.split('')
  let s = arr[0]
  let max = 0
  for(let i=0;i<arr.length-1;i++) {
    if(obj[arr[i]]) {
      let count = ++obj[arr[i]]
      if(count>max) {
        max = count
        s = arr[i]
      }
    } else {
      obj[arr[i]] = 0
    }
  }
  return [s,max]
}

// 复习最长不重复子串
function getlen(str) {
  let arr = [],length = 0
  for(let item of str) {
    if(arr.includes(item)) {
      let index = str.indexOf(item)
      arr.splice(0,index+1)
    } else {
      arr.push(item)
    }
  }
  length = arr.length>length ? arr.length : length
  return length 
}

// 字符串出现最多的次数
function isMaX(str) {
  let obj = {}
  let arr = str.split("")
  let max = 1
  let s = arr[0]
  for(let i=0;i<str.length-1;i++) {
     if(obj[arr[i]]) {
       count = ++obj[arr[i]]
       if(count>max) {
         max = count 
         s = arr[i]

       }

     } else {
       obj[arr[i]] = 0
     }
  }
  return [s,max]
}
