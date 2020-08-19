// 给定一个二叉树，返回它的 后序 遍历。

// 示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [3,2,1]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

// 附赠leetcode地址：leetcode

// 后序遍历
var postorderTraversal = function(root) {
    let result = []
    var postorderTraversalNode = (node) => {
        if(node) {
            // 先遍历左子树
            postorderTraversalNode(node.left)
            // 再遍历右子树
            postorderTraversalNode(node.right)
            // 最后根节点
            result.push(node.val)
        }
    }
    postorderTraversalNode(root)
    return result
};