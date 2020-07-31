// 给定一个字符串，逐个翻转字符串中的每个单词。

// 示例 1：

// 输入: "the sky is blue"
// 输出: "blue is sky the"
// 示例 2：

// 输入: "  hello world!  "
// 输出: "world! hello"
// 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
// 示例 3：

// 输入: "a good   example"
// 输出: "example good a"
// 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
// 说明：

// 无空格字符构成一个单词。
// 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
// 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

// 思路1 正则表达式+js api
function reverseString (str) {
    // 去首尾空格, 替换多个空格为一个, 根据一个空格切分数组 翻转最后再转为字符串
   return str.trim().replace(/\s+/g,' ').split(' ').reverse().join(' ')
}

// 思路 双指针
// 先从左边开始跑 如果首尾有空格指针压缩
// 左边指针开始 如果遇到空格且单词存在 就把这个单词放进队列中
// 如果没有遇到空格 单词就进入拼接 left指针一直移动 最后循环完 把最后的word也加入队列
// 然后 把队列中转回字符串
function reverseString (str) {
   let left = 0
   let right = str.length - 1
   let queue = []
   let word = ''
   while (str.chatAt(left) === ' ') left++
   while (str.chatAt(right) === ' ') right--
   while(left <= right) {
      let chat = str.chatAt(left)
      if (chat === ' ' && word) {
          queue.unshift(chat)
          word = ''
      } else {
          word += chat
      }
      left ++ 
   }
   queue.unshift(word)
   return queue.join(' ')

}