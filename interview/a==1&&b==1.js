//  a == 1 && a == 2 && a == 3

// js == 隐式转换 会调用toPrimitive()原始类型函数
// 一般来说对于对象的转化先调用valueOf 如果没有值 再调用toString
const a = {
    value: [3,2,1],
    valueOf: function() {
        return this.value.pop()
    }
}

// a === 1 && a === 2 && a === 3
// 
let val = 0
Object.defineProperty(window, 'a', {
    get: function(){
       return ++val
    }
})