// 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
// 说明：
// 你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。
// 示例 1:
// 输入: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// 输出: 1
// 示例 2:
// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// 输出: 3
// 进阶：
// 如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化 kthSmallest 函数？

// 对于二叉搜索树而言 中序遍历 就是左根右 就是一次排序

let kthSmallest = function (root, k) {
    let res = null
    let inorderTraserval = function (node) {
        if (node !== null && k > 0) {
            inorderTraserval(node.left)
            if (--k == 0) {
                res = node.val
                return
            }
            inorderTraserval(node.right)
        }
    }
    inorderTraserval(root)
    return res
}


// 二叉树的中序遍历 就可以达到排序的效果

function searchSort(root, k) {
    let stack = []
    let node = root
    while (node || stack.length) {
        while (node) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        if (--k === 0) {
            return node.val
        }
        node = node.left
    }
    return null
}