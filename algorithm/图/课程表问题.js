// 你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。

// 在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们：[0,1]

// 给定课程总量以及它们的先决条件，请你判断是否可能完成所有课程的学习？

// 示例 1:

// 输入: 2, [[1,0]] 
// 输出: true
// 解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
// 示例 2:

// 输入: 2, [[1,0],[0,1]]
// 输出: false
// 解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
// 提示：

// 输入的先决条件是由 边缘列表 表示的图形，而不是 邻接矩阵
// 你可以假定输入的先决条件中没有重复的边
// 1 <= numCourses <= 10^5

// 思路 : 构建图 
// 入度 为0的课程是可以直接学习的
// 创建一个队列, 将临接表中所有入度为0的节点放入队列中
// 如果队列不为空, 取出第一个节点 numcourse-- 学习该课程,然后将所有依赖该课程的临接节点入度-1
// 如果-1后入度为0 则该课程可以立即学习
// 如果不为0 则继续遍历下一节点
// 当队列为空时 看学习课程numcourse是否为0
let scheduled = (numCourse, depend) => {
    // 没有依赖关系 所有课程独立 可以学完
   if (depend.length === 0) {
       return true
   }
   // 入度表
   let inDegree = new Array(numCourse).fill(0)
   // 用map作为一个相邻节点表
   let map = new Map()
//    5, [[4,2],[4,3],[2,0],[2,1]] 比如输入 dep[[4,2],[4,3],[2,0],[2,1]]
   for(let i of depend) {
     // 出现一次入度加1
     inDegree[i[0]]++
     if (!map.has(i[1])) map.set(i[1],[])
     let temp = map.get(i[1])
     temp.push(i[0])
   }
   console.log(map,'map')
   // 创建队列
   let queue = []
   for (let i=0;i<numCourse;i++) {
       //入度为0加入队列   
       if(inDegree[i]===0){
           queue.push(i) // 3 1 0
       }
   }
   console.log(queue,'queue1')
   while(queue.length>0) {
       let first = queue.shift()
       numCourse--
       if(!map.has(first)) continue
       console.log(map.get(first),1231)
       for (let w of map.get(first)) {
           inDegree[w]--  
           if (inDegree[w]===0) {
               queue.push(w)
               console.log(queue,'queue2')
           } 
       }
   }
   return numCourse === 0

}
scheduled(5,[[4,2],[4,3],[2,0],[2,1],[3,1]])