// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
// 进阶：

// 你可以运用递归和迭代两种方法解决这个问题吗？
// 递归
function isSymmetry (root) {
   if (!root) return true
   var isSymmetryNode = (left,right) =>{
      if (!left && !right) return true
      if (!left || !right) return false
      return left.val === right.val &&
      isSymmetryNode(left.left,right.right) && 
      isSymmetryNode(left.right,right.left)
   }
   return isSymmetryNode(root.left,root.right)
}

// 迭代法
function isSymmetry (root) {
  if (!root) return true
  let stack = [root.left,root.right]
  while(stack.length) {
    let right = stack.pop()
    let left = stack.pop()
    if (right.val !== left.val) return false
    if (left && right) {
        stack.push(left.left)
        stack.push(right.right)
        stack.push(left.right)
        stack.push(right.left)
    } else if(left || right) {
        return false
    }
  }
  return true
}