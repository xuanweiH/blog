// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

// 示例 1:

// 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true 。

// 示例 2:

// 给定二叉树 [1,2,2,3,3,null,null,4,4]

//       1
//      / \
//     2   2
//    / \
//   3   3
//  / \
// 4   4
// 返回 false 。

// 暴力解
function isBalance(root) {
   if (!root) return false
   return Math.abs((depth(root.left)-depth(root.right))<=1) &&
      isBalance(root.left) && isBalance(root.right)
}
function depth (root) {
   if (!root) return -1
   return Math.max(root.left,root.right) +1
}


// 优化解
function isBalance(root) {
  return balanced(root) !== -1
}

function balanced(root) {
    // 判断是否平衡
    if (!root) return 0
    const left = balanced(root.left)
    const right = balanced(root.right)
    // 如果左树或者右树不平衡则不平衡 如果左边和右边都平衡但是高度差大于1则也不平衡
    if (left === -1 || right === -1 || Math.abs(left-right) > 1) {
        return -1
    }
    return Math.max(left,right) +1
}