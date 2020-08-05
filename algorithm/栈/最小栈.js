// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。
// 示例:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.


// 方案1 维护一个保存最小值的栈 长度和主栈一致 获取最小值时从最小栈里取
// 核心在于 push方法的时候 拿到最小的值放在最小栈的栈顶
class MinStack {
    constructor () {
        this.length = 0
        this.content = []
        this.mins = []
    }
    push (val) {
      const curMin = this.mins[this.length-1] !== undefined ? this.mins[this.length-1]: Infinity
      this.content[this.length++] = val
      this.mins[this.length-1] = Math.min(curMin,val)
    }
    pop () {
        return this.content[--this.length]
    }
    top () {
        return this.content[this.length-1]
    }
    getMin () {
        return this.mins[this.length-1]
    }
}

// 方案2 每次进栈出栈的时候 都重新定义min的值 获取min的时候就直接取min
var MinStack = function () {
    this.stack = []
    this.min = null
} 
MinStack.prototype.push = function(x) {
    if (!this.stack.length) this.min = x
    this.min = Math.min(x, this.min)
    this.stack.push(x)
}
MinStack.prototype.pop = function() {
    const num = this.stack.pop()
    this.min = Math.min(...this.stack)
    return num
}
// 获取栈顶元素
MinStack.prototype.top = function() {
    if(!this.stack.length) return null
    return this.stack[this.stack.length -1] 
};

// 检索栈中的最小元素
MinStack.prototype.getMin = function() {
    return this.min
};