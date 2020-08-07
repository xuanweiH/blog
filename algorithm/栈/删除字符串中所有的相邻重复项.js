// 给出由小写字母组成的字符串 S ，重复项删除操作 会选择两个相邻且相同的字母，并删除它们。

// 在 S 上反复执行重复项删除操作，直到无法继续删除。

// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

// 示例：

// 输入："abbaca"
// 输出："ca"
// 解释：
// 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。
// 之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
// 提示：

// <= S.length <= 20000
// S 仅由小写英文字母组成。

// 思路: 遍历字符串, 用一个栈存储字符, 每次都取出栈顶的字符, 如果栈顶字符与当前遍历的字符不相等 就把栈顶字符和当前字符依次推入
function del(s) {
   let stack = []
   for (let i of s) {
       let prev = stack.pop()
       if (prev !== i) {
           stack.push(prev)
           stack.push(i)
       }
   }
   return stack.join('')
}

console.log([].pop())
console.log([undefined,'a','b'].join(''))