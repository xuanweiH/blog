// 尽管Promise通过链式调用取代了回调嵌套,但是对于过多的链式调用可读性仍然不好,
// 流程控制也不方便, es7提出的async函数,终于让js对异步操作有了终极解决方案

// 而实际上 async/awiat是对generator生成器的封装
// es6 引入的generator函数 可以通过yield关键字把函数执行流程挂起,通过next()方法切入下一个状态
// 为改变执行流程提供了可能

// 而 *函数/yield 就和 async/await用法非常类似了
// 不一样之处就在于 
// async/await 不需要手动调用next
// async函数返回是promise对象 而generator是返回生成器对象
// await能够返回promise的resolve/reject的值

// 实现一个async/await 就是基于上述几点对generator的封装

function run (gen) {
    // 返回一个promise 所以要包装一层
    return new Promise((resolve,reject) => {
        var g = gen()
        function step(val) {  // 封装递归执行next
            // 错误捕获
            try {
                var res = g.next(val) 
            } catch(err) {
                return reject(err)
            }
            // res是一个对象 {done:false,value:xx} 递归的终止条件就是res.done为true说明调用结束
            if (res.done) return resolve(res.value)
            // promise.then实现自动迭代
            // 包装一层确保.then 调用前的是promise对象
            Promise.resolve(res.value).then(val => {
                // 等待promise完成自动执行下一个next 并传入resolve的值
                step(val)
            },err => {
                g.throw(err)
            })
        }
        step()
    })
   
}

