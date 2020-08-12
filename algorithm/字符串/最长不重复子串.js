// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 思路: 维护一个数组存字符串节点 判断新的字符在不在数组里面,如果不在就表示没重复 加入进去
// 如果重复了 就截取下标加1的长度 对比length的长度
function getSon (str) {
   let arr = []
   let length = 0
   for (let item of str) {
       if (arr.includes(item)) {
           let index = arr.indexOf(item)
           arr.splice(0, index+1)
       }
       arr.push(item)
   }
   length = arr.length > length ? arr.length:length
   return length

}

// 思路 map结构 j表示遍历下标 i表示不重复下标

function getSon (str) {
  let map = new Map(), max = 0
  for (let i=0,j=0;j<str.length;j++) {
      if (map.has(str[j])) {
         i = Math.max(map.get(str[j])+1,i) 
      }
      max = Math.max(max, j-i+1)
      map.set(str[j], j)
  }
  return max
}