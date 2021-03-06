
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意： 给定 n 是一个正整数。
// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶

// 动态规划
// 动态规划是将复杂问题分解成小问题求解的策略，与分治的思路不同的是，分治要求各个子任务相互独立
// 动态规划的子任务相互关联

// 我们使用动态规划求解问题时，需要遵循以下几个重要步骤：

// 1.定义子问题
// 2.实现需要反复执行解决的子子问题部分
// 3.识别并求解出边界条件

// 对于爬楼梯来说 定义子问题： 子问题就是每次爬楼的台阶数 可能是1也可能2，
// n级台阶的方案数
// dp[n] = dp[n-1] + dp[n-2]
// 边界条件: dp[0] = 1 dp[1] = 1

let climbStairs = function(n) {
   let dp = [1,1]
   for(let i=2; i<=n;i++) {
       dp[i] = dp[i-1] + dp[i-2]
   }
   return dp[n]
}

// 如果要优化空间复杂度的话
let climbStairs = function(n) {
    let res = 1, n1 = 1, n2 = 1
    for(let i = 2; i <= n; i++) {
        res = n1 + n2
        n1 = n2
        n2 = res
    }
    return res
}
// 其实就是斐波那契数列的解法，缓存数量之和



// 爬楼梯的动态规划解法
// dp
// dp[n] = dp[n-1] + dp[n-2]

let climp = (n) => {
  let dp = [1,1]
  for(let i=2; i<n;i++) {
      dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}
// 优化 缓存版本
let better = (n) => {
    let res = 1, n1=1,n2=1;
    for (let i=2;i<n;i++) {
        res = n1+n2
        n1= n2
        n2 =res
    }
    return res
}
