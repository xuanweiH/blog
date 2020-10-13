// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？


// 迭代
var reverse = function() {
   // 边界条件
   if (!head || !head.next) return head
   let prev = null, curr = head
   while (curr) {
       //  临时存储当前节点的后继节点
       let next = curr.next
       //  把后继指针翻转
       curr.next = prev
       // 变更节点 prev curr
       prev = curr
       curr = next
   }
   head = prev
   return head
}




// 递归 指针从后指向前 不断翻转当前节点的后继节点next
var reverseList = function(head) {
    // 边界条件 没有后继节点了
    if (!head || !head.next) return head
    let next = head.next
    // 递归反转
    let reverseHead = reverseList(next)
    // 变更指针
    next.next = head
    head.next = null
    return reverseHead
};


// 翻转链表练习
function reverse(head) {
   if (!head || !head.next) return head
   let curr = head, prev = null
   while(curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
   }
   head = prev
   return head
}