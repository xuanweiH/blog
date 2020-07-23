// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

// 示例 1：

// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。
// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。
// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。

// 思路 在循环的过程中给链表里面的值加标识 如果有环在下一次循环中会就会遇到
function isCircle(head) {
   while (head) {
    if (head.flag) return true
    head.flag = true
    head = head.next
   }
   return false

}
// 或者快慢指针 快指针一次走2 慢一次走1 如果有环 最终一定会相遇
function isCir(head) {
   if (!head || !head.next) return true
   let fast = head.next.next, slow = head.next
   // 如果快慢指针不相同进循环
   while (fast !== slow) {
       // 快指针走到头了说明没环
       if (!fast || !fast.next) return false
       fast = fast.next.next
       slow = slow.next
   }
//    快慢相同了说明有循环
   return true

}