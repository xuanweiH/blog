// 实现一个函数，判断输入是不是回文字符串
// 首先,理解什么是回文字符串,简单的一句话概括就是关于中心左右对称的字符串。
// 例如:ABCBA或者AACCAA是回文字符串;ABCCA或者AABBCC不是回文字符串。 判断方法就是,依次看两端的字符是否相等。

// 思路: api一把梭 转成数组翻转再转字符串对比
function judge (str) {
  return str === str.split('').reverse().join()
}

// 思路 指针
function judge (str) {
   if (typeof str !== 'string') return false
   let l =0, r=str.length-1
   while(l<=r) {
       if (str.charAt(l) !== str.charAt(r)) return false
       l++
       r--
   }
   return trur
}