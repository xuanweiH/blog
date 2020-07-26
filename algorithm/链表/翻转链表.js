// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

// 递归 指针从后指向前 
var reverseList = function(head) {
    if(!head || !head.next) return head
    var next = head.next
    // 递归反转
    var reverseHead = reverseList(next)
    // 变更指针
    next.next = head
    head.next = null
    return reverseHead
};