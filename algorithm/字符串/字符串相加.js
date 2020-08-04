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
    }
    res = tmp%10 + res
    if (tmp>9) tmp = 1
    else tmp = 0
    if (tmp) res = 1+res
    return res
}