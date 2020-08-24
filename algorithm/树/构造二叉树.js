// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 限制：

// 0 <= 节点个数 <= 5000

// 思路 
// 前序遍历 根左右  中序遍历左右根
// 所以前序遍历的第一个数就是根
// 已根节点为分水岭, 在中序中 根的index之前的就是左 之后就是右
// 递归调用
function build(preorder, inorder) {
    if (!preorder.length) return null
    const node = new TreeNode(preorder[0])
    const index = inorder.indexOf(preorder[0])
    const inLeft = inorder.slice(0, index)
    const inRight = inorder.slice(index+1)
    const preLeft = preorder.slice(1,index+1)
    const preRight = preorder.slice(index+1)
    node.left = bulid(preLeft,inLeft)
    node.right = build(preRight,inRight)
    return node
}

