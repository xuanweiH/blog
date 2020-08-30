// 字节一面：给定一个二叉树, 找到该树中两个指定节点间的最短距离

// 思路 
// 题目分解 首先找到最短公共先祖, 然后分别求出先祖到节点的距离相加

const getShortest = (root,p,q) => {
   const parent = getParent(root,p,q)
   // 存左右路径
   let pdis = [],qdis = []
   getPath(parent,p,pdis)
   getPath(parent,q,qdis)
   return (pdis.length+qdis.length)
}

// 获取最近公共先祖
// 如果左右都能找到 说明先祖为根
// 如果左边找不到 说明节点在右边
// 如果右边没找到 说明节点在左
// 如果都没找到 说明在根
const getParent = (root,p,q) => {
   if (root === null || root === p || root === q) {
       return root
   }
   const left = getParent(root.left,p,q)
   const right = getParent(root.right,p,q)
   if (left === null) return right
   if (right === null) return left
   return root
}

// 获取路径
const getPath = (root,p,path) => {
   // 如果找到了节点
   if (root === p) return true
   path.push(root)
   let hasFound = false
   // 先找左节点
   if (root.left) {
     hasFound = getPath(root.left,p,path)
   }
   if (!hasFound && root.right) {
       hasFound = getPath(root.right,p,path)
   }
   if (!hasFound) {
     path.pop()
   }
   return hasFound
}






// -----------------------------练习-------------------------------
// const getDis = (root,p,q) => {
//   let parent = getP(root,p,q)
//   let ds = [], fs=[]
//   getD(parent,p,ds)
//   getD(parent,q,fs)
//   return (ds.length+fs.length)
// }

// // 先求最近公共先祖
// const getP = (root,p,q) => {
//    if (root === null || root === p || root === q) return root
//    const left = getP(root.left,p,q)
//    const right = getP(root.right,p,q)
//    if(left === null) return right
//    if(right === null) return left
//    return root
// }

// // qiu luj
// const getD = (root,p,path) => {
//    if (root === p) return true 
//    let hasFound = false
//    path.push(root)
//    if (root.left) {
//       hasFound = getD(root.left,p,path)
//    } 
//    if (!hasFound && root.right) {
//       hasFound = getD(root.right,p,path)
//    }
//    if (!hasFound) {
//       path.pop()
//    }
//    return hasFound

// }