// 实现一个call
// 首先要明白 call是做什么的.
// call() 可以改变作用域中的this

// 如何改变this的指向,很简单 就把它添加到一个对象中就行了.但是对象里就多了一个属性,没关系 删掉就行
function myCall (context,...args) {
    // 如果有传 就转为Obj 没传默认是指向window的
    context ? Object(context) : window
    // 创建一个独一无二的属性
    let fn = symbol()
    // 改变this
    context[fn] = this
    // 函数会有返回值
    let res = context[fn](...args)
    // 删掉多余的属性
    delete context[fn]
    return res
}

// 考虑相关兼容性问题 es3版本如下
function myCall (context) {
    context? Object(context) : window
    context.fn = this
    var args = []
    for (var i=1;i<arguments.length;i++) {
        args.push('arguments['+ i +']')
    }
    var res = eval('context.fn('+args+')')
    delete context.fn
    return res
}
