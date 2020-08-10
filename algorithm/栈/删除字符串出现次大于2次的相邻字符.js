// 输入："abbbaca"
// 输出："ca"
// 解释："abbbaca" => "aaca"=>"ca"


//思路 首先找到栈顶的值 已经当前值
// 如果栈顶值等于当前值 就把栈顶值弹出 并且如果继续循环如果还是相等就i++
function del(s) {
  const stack = []
  let top
  let next
  let i = 0
  while(i<s.length) {
      top = stack[stack.length-1]
      next = s[i]
      if (next === top) {
         stack.pop()
         while(s[i] === top) i++
      } else {
          stack.push(next)
          i++
      }
  }
  return stack.join('')
}
console.log(del("abbbaca"))