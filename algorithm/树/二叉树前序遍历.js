// 二叉树的前序遍历
// 给定一个二叉树，返回它的 前序 遍历。

//  示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
// 前序遍历规则 根左右

// 树的遍历 最好的方法就是递归
function preOrderTraverse (root) {
   let res = []
   let preOrderTraverseNode = (node) => {
       while (node) {
        res.push(node.val)
        preOrderTraverseNode(node.left)
        preOrderTraverseNode(node.left)
       }
   }
   preOrderTraverseNode(root)
   return res
}
// 用栈实现
// 先入根 然后每次取出栈头  推进结果中
// 根右先入栈 所以根左先出 顺序需要注意一下 
function preOrderTraverse (root) {
   let stack = [root]
   let res = []
   while (stack.length>0) {
       node = stack.pop()
       res.push(node.val)
       if(node.right) stack.push(node.right) 
       if(node.left) stack.push(node.left) 
   }
   return res
}
