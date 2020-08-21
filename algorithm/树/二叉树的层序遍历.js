// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。 

// 示例：
// 二叉树：[3,9,20,null,null,15,7] ,

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// 广度优先遍历
// 思路用 两个临时的数组一个存储 当前层的节点 一个当做下一层的暂存区
function leveOrder (root) {
    if (!root) return []
    let res = []
    let queue = [root]
    while(queue.length) {
        let temp = [],curr = []
        while(queue.length) {
            let node = queue.shift()
            curr.push(node.val)
            if (node.left) temp.push(node.left)
            if (node.right) temp.push(node.right)
        }
        // curr当前层全部放入完成后
        res.push(curr)
        // temp存储下一层queue进行循环
        queue = temp
    }
    return res
}
// 