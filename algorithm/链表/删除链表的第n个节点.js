// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的

// 思路: 快慢指针 快指针先走n步 如果快指针的下一步为空 说明要删除的是头部
// 否则就是快慢继续走 要删除的是慢指针的下一步

function del (head, n) {
   let fast = head, slow = head
   while(--n) {
       fast = fast.next
   }
   if (!fast.next) return head.next
   while (fast && fast.next) {
       fast = fast.next
       slow = slow.next
   }
   slow.next = slow.next.next
   return head
}