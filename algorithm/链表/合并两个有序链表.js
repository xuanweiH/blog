// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4


// 思路: 链表本身有序, 所以拿第一个链表 l1.val 去和 第二个链表的值l2.val对比
// 小的值排在前一位 大的值排在next 依次递归 l1 l2都为null时结束


function merge (l1, l2) {
   if (l1 === null) return l2
   if (l2 === null) return l1
   if (l1.val <= l2.val) {
       l1.next = merge(l1.next,l2)
       return l1
   } else {
       l2.next = merge(l1,l2.next)
       return l2
   }
}