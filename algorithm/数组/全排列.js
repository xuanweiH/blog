// 全排列 输入一个数组 例如[a,b,c] 输出所有不重复的的情况
// [a,b,c] [a,c,b] [b,a,c] [b,c,a] [c,a,b] [c,b,a]

// 思路: 回溯递归
// 操作当前层完成后 讲结果继续向下层递归
// 每当这一层的操作完成后,就会返回上一层的其他情况继续遍历


function permutations (nums) {
   let len = nums.length
   let res = []
   let tmpPath = []
   let dfs = (tmpPath) => {
      if (tmpPath.length === len) {
          res.push(tmpPath.slice())
          return 
      }
      for(let i=0;i<len;i++) {
          if(!tmpPath.includes(nums[i])) {
              tmpPath.push(nums[i])
              dfs(tmpPath)
              tmpPath.pop()
          }
      }
   }
   dfs(tmpPath)
   return res
}
// [] [1] [1, 2, 3]
// console.log([1,2,3].slice())


function permutations(nums) {
    let len = nums.length
    let res = []
    let tempPath = []
    let dfs = (tempPath) => {
      if(tempPath.length === len) {
          res.push(tempPath.slice())
          return
      }
      for(let i=0; i<len;i++) {
          if(!tempPath.includes(nums[i])) {
              tempPath.push(nums[i])
              dfs(tempPath)
              tempPath.pop()
          }
      }
    }
    dfs(tempPath)
    return res
}