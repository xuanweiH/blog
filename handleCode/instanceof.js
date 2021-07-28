// 手写实现一个 instance of

function instance_of(L, R) {
    // L表示左边的表达式 R表示右边的表达式
    let O = R.prototype
    L = L.__proto__
    while(true) {
        if(L === null) return false
        if(L === O) return true
        L = L.__proto__
    }
}