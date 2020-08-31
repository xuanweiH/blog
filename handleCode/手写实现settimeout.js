// 实现一个简易版的settimeout
// 通过 requestAnimationFrame和cancelAnimationFrame 来实现
// 定义开始时间和现在的时间
// 时间差一旦大于延迟时间 就调用循环
const mySetTimeOut = (fn, time, ...args) => {
   const start = new Date()
   let timer,now 
   const loop = () => {
       timer = window.requestAnimationFrame(loop)
       now = +new Date()
       if (now - start >= time) {
           fn.apply(this,...args)
           window.cancelAnimationFrame(timer)
       }
   }
   window.requestAnimationFrame(loop)
}
function con() {
    console.log('哈哈哈哈')
}

mySetTimeOut(()=> {
    con()
},3000)