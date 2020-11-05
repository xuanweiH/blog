// 工作中在使用async/await的时候
async function func() {
    try {
        let res = await asyncFunc()
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}

// -------第一次优化 使用async function errorCaptured
// 封装一个处理异常的函数
async function errorCaptured(asyncFunc) {
    try {
      let res = await asyncFunc()
      return [null,res]
    } catch (e) {
      return [e,null]
    }
}
// 使用 async function func()
// 需要引入errorCaptured函数
async function func() {
    let [err, res] = await errorCaptured(asyncFunc)
    if (err) {
        // 错误捕获
    }
    // res ...
}
// <--------------------------- 如果是loader版本 --------------------------->

// 在实现这个 webpack loader 之前，先简要介绍一下 loader 的原理，我们在 webpack 中定义的一个个 loader，
// 本质上只是一个函数，在定义 loader 同时还会定义一个 test 属性，
// webpack 会遍历所有的模块名，当匹配 test 属性定义的正则时，会将这个模块作为 source 参数传入 loader 中执行

