// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
// (若队列中没有元素，deleteHead 操作返回 -1 )
// 示例 1：
// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]
// 示例 2：
// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]
// 提示：
// 1 <= values <= 10000
// 最多会对 appendTail 、deleteHead 进行 10000 次调用

// 思路: 栈的特点是先进后出 队列的特点是先进先出 所以两个栈 一个栈出进另一个 就正好可以达到倒序的效果
// appendTail就直接push
// deleteHead 删除头部要注意一下队列头需要倒序
function Queue () {
    this.stack1 = []
    this.stack2 = []
}
Queue.prototype.appendTail = function (value) {
    this.stack1.push(value)
}
Queue.prototype.deleteHead = function () {
    if (this.stack2.length) {
        return this.stack2.pop()
    }
    if (!this.stack1.length) return -1
    while(this.stack1.length) {
        this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop()
}