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
// 左右根
function postOrderTraserval (root) {
    let res = []
    let postOrderTraservalNode = (node) => {
       if (node) {
        postOrderTraservalNode(node.left)
        postOrderTraservalNode(node.right)
        res.push(node.val)
       }
    }
    postOrderTraservalNode(root)
    return res
}

// 迭代法 还是用栈

function postOrderTraserval (root) {
   let res = []
   let stack = []
   if (root) stack.push(root)
   while(stack.length) {
       const node = stack.pop()
       // stack.push 是根左右 如果用unshift就是 右左根
       res.unshift(node.val)
       // 栈先进左再进右 那么出栈就是 先出右后出左  出了右以后是先往前插的 所以最后顺序就是左右根
       if (node.left) {
           stack.push(node.left)
       }
       if (node.right) {
           stack.push(node.right)
       }
   }
   return res
}

// 复习二叉树后序遍历 栈
function postOrderTraserval (root) {
  // 后序遍历 左右根
  let res = []
  let stack = []
  if(root) stack.push(root)
  while (stack.length) {
      let node = stack.pop()
      res.unshift(node)
      if (node.left) stack.push(node.left)
      if(node.right) stack.push(node.right)
  }
  return res

}