/* 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n ）来保存 nums2 中的元素。 */

/* 
示例
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6] */

 // 思路
//  首先以其中一个数组为基础往里面放值 数组长度应为 数组原先的长度
//  从后往前写入, 对比两数组对应位置大小, 讲大的填入 填入后len-- ,让数组往前推
//  边界条件: 如果len2<0了 说明第二个数组都是大值, 且 nums1 nums2都为有序 则结束
//  如果 len1<0了 说明此时 原先的nums1已经放完 需要拿nums2里面的数往前填充
 function merge (nums1, nums2) {
     let len1 = nums1.length -1
     let len2 = nums2.length -1
     let len = nums1.length + nums2.length -1
     while (len2 >= 0) {
         if (len1 < 0) {
            nums1[len--] = nums2[len2--]
            continue
         } else {
            nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--] 
         }
     }
 }
 

//如果使用es以及api
 function mergeApi (nums1, nums2) {
    nums1.splice(nums1.length)
    nums2.splice(nums2.length)
    nums1.push(...nums2)
    nums1.sort((a,b) => {return a-b})
 }
