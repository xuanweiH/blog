// 给定一个二叉树，返回它的 中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]
// 进阶:  递归算法很简单，你可以通过迭代算法完成吗？

// 中序遍历 左根右
function midOrderTraserve (root) {
    let res = []
    let midOrderTraserveNode = (node) => {
       if (node) {
          midOrderTraserveNode(node.left)
          res.push(node.val)
          midOrderTraserveNode(node.right)
       }
    }
    midOrderTraserveNode(root)
    return res
}

// 如果不用递归 迭代的话
// 首先把 根节点推入栈中 然后把左树依次推入栈中
// 左树遍历完成后 取出栈首 推入结果中 此时推进的全是左树 最后一个为根
// 然后再循环右树
function midOrderTraserve (root) {
   let res = []
   let stack = []
   let node = root
   while(node || stack.length) {
      // 遍历左子树
      while(node) {
         stack.push(node)
         node = node.left
      }
      node = stack.pop()
      res.push(node.val)
      node = node.right
   }
   return res
}