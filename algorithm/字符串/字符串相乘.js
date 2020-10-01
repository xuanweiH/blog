// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"
// 说明：

// num1 和 num2 的长度小于110。
// num1 和 num2 只包含数字 0-9。
// num1 和 num2 均不以零开头，除非是数字 0 本身。
// 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。


// 思路 
// 乘法其实也是加法的一种, 把每一位的数乘上另一个的尾数 每一个都加起来就得到对应的和


function mutiple (nums1,nums2) {
   let res = []
   for(let i = 0; i<nums1.length; i++) {
       // nums1的尾数
       let temp1 = nums1[nums1.length-1-i]
       for (let j=0; j<nums2.length;j++) {
           let temp2 = nums2[nums2.length-1-j]
           let pos = res[i+j] ? res[i+j]+temp1*temp2 : temp1*temp2
           res[i+j] = pos%10
        //    进位
           pos >= 10 && (res[i+j+1] = (res[i+j+1] ? res[i+j+1] + Math.floor(pos/10) : Math.floor(pos/10)))
       }
   }
   return res.reverse().join('')

}

console.log(mutiple('123','456'))