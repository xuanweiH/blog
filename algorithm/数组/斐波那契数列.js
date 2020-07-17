// 经典斐波那契数列求解
// 斐波那契数列指的是 一串数 从第三位开始 后一位是前两位数之和

// 一开始我们会这样想
function fibonacci(n) {
   if (n<=1) return n
   return (fibonacci(n-1) + fibonacci(n-2)) % 1000000007
}
//1000000007 是最小的十位质数。模1000000007，可以保证值永远在int的范围内。
// 但是用以上方法得出的结果 复杂度过高 O(2^n)

// 优化 记录上一次的数值
function fibonacci(n) {
    if (n<=1) return n
    let res = 0
    let prev1 = 0
    let prev2 = 1
    for (let i=2; i<=n; i++) {
        res = (prev1 + prev2) % 1000000007
        prev1 = prev2
        prev2 = res
    }
    return res
 }

//