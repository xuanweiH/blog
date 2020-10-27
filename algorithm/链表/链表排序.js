// 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

// 示例 1:

// 输入: 4->2->1->3
// 输出: 1->2->3->4
// 示例 2:

// 输入: -1->5->3->4->0
// 输出: -1->0->3->4->5

// 归并排序排链表
// 归并排序是一种分治思路的排序 将数组分化为两个更小的数组, 直至每个数组里面只包含一个元素
// 然后将小数组不断的合并为新的较大的数组, 最后形成的数组就是排序完成后的结果

// 排序链表第一步 分割
// 使用快慢指针 获取链表中间节点,根据中间节点分割成两个小链表
// 递归执行上一步,直至小链表中只有一个节点

// 第二步 归并 合并有序链表

let sortList = function(head) {
    return mergeSortRec(head)
}
// 如果分裂后链表长度不为1 则继续分裂
let mergeSortRec = function (head) {
    if (!head || !head.next) {
        return head
    }
    // 获取中间节点
    let middle = middleNode(head)
    // 分裂成两个链表 (重点)
    let temp = middle.next
    middle.next = null
    let left = head, right = temp
    // 递归分裂
    let left = mergeSortRec(left)
    let right = mergeSortRec(right)
    // 合并有序链表
    return mergeTwoList(left,right)
}
// 获取中间节点
function middleNode (head) {
    let fast = head, slow = head
    while(fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

// 合并有序链表 
let mergeTwoList = function (l1,l2) {
   let preHead  = new ListNode(-1)
   let cur = preHead
   while(l1 && l2) {
       if (l1.val < l2.val) {
           cur.next = l1
           l1 = l1.next
       } else {
           cur.next = l2
           l2 = l2.next
       }
       cur = cur.next
   }
   cur.next = l1 || l2
   return preHead.next
}

// 总结下来
// 链表排序 采用归并排序
// 主要分为两步 1. 递归分割链表
// 2. 排序后合并链表

let sortList = function (head) {
    return mergeSort(head)
}
// 归并
function mergeSort(head) {
    if (!head || !head.next) {
        return head
    }
    let midNode = middleNode(head)
    let temp = midNode.next
    midNode.next = null
    let left = head
    let right = temp
    left = mergeSort(left)
    right = mergeSort(right)
    return mergeTwoList(left,right)
}
// 获取中间节点
function middleNode (head) {
   let fast = head, slow = head
   while (fast && fast.next && fast.next.next) {
       slow = slow.next
       fast = fast.next.next
   }
   return slow
}
// 合并有序链表
function mergeTwoList (l1,l2) {
   let preHead = new NodeList(-1)
   let cur = preHead
   while(l1 && l2) {
       if (l1.val < l2.val) {
           cur.next = l1
           l1 = l1.next
       } else {
           cur.next = l2
           l2 = l2.next
       }
       cur = cur.next
   }
   cur.next = l1 || l2
   return preHead.next
}