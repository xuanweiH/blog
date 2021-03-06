// 给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的和。

// 例如：

// "111" + ”2222“ = ”2333“

// 注意：

// num1 和 num2 的长度都小于 5100
// num1 和 num2 都只包含数字 0-9
// num1 和 num2 都不包含任何前导零
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

// 思路 
// 1. 用一个tmp暂存每一位对位相加
// 2. 对10取余 添加到前一次计算结果的前面
// 3. 如果大于9 向前进位 否则不进位 通过temp =1表示
// 4. 如果tmp最后存在进位 再在前面加一位
function sum (str1, str2) {
    let a = str1.length, b =str2.length, res ='', tmp =0
    while (a || b) {
        a ? tmp += +str1[--a] : ''
        b ? tmp += +str2[--b] : ''
        res = tmp%10 + res
        if (tmp>9) tmp = 1
        else tmp = 0
    }
    if (tmp) res = 1+res
    return res
}
// console.log(sum('12314','1231'))
// 或者用数组来做 ~~(tmp/10)  ~~取整 大于等于10为1 小于10为0
function add(str1, str2) {
    let result = ''
    let tempVal = 0
    let arr1 = str1.split('')
    let arr2 = str2.split('')
  
    while (arr1.length || arr2.length || tempVal) {
      tempVal += ~~arr1.pop() + ~~arr2.pop()
      result = tempVal % 10 + result
      tempVal = ~~(tempVal / 10)
    }
  
    return result.replace(/^0+/, '')
  }

console.log(add('189', '45'))


  // 字符串相加复习
  // tmp 用于储存每一位的相加 之后再用进位
  function strSum(str1, str2) {
    let a = str1.length, b= str2.length, tmp = 0, res = ''
    while(a || b) {
      a ? tmp += +str1[--a]: ""
      b ? tmp += +str2[--b]: ""
      res = tmp%10 + res
      console.log(res, 'res')
      if(tmp>9) tmp = 1
      else tmp =0 
    }
    if(tmp) res = 1+res
    return res
  }
  console.log(strSum('189','45'))
  // 189 45   9 5  14  res 4   tmp1  13 34  