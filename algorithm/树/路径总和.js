// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

// 说明: 叶子节点是指没有子节点的节点。

// 示例: 
// 给定如下二叉树，以及目标和 sum = 22 ，

//           5
//          / \
//         4   8
//        /   / \
//       11  13  4
//      /  \      \
//     7    2      1
// 返回 true , 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

// 思路 递归
// 判断 如果左右节点都为空 则说明当前这个根节点就得是路径和
// 如果没找到 则用总和减去路径值
// 依次递归 直到找到或者没找到为止
function isPathSum (root,sum) {
    if (!root) return false
    if (root.left === null && root.right === null) return root.val === sum
    sum = sum - root.val
    return isPathSum(root.right,sum) || isPathSum(root.left,sum)
}