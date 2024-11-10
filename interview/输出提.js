const p1 = new Promise(resolve => {
    setTimeout(() => {
         resolve(1)
     }, 1000)
 })
 
 const p2 = new Promise(resolve => {
     setTimeout(() => {
         resolve(2)
     }, 3000)
 })
 
 const p3 = new Promise(resolve => {
     setTimeout(() => {
         resolve(3)
     }, 2000)
 })
 
 const p4 = new Promise(resolve => {
     setTimeout(() => {
         resolve(4)
     }, 1500)
 })
 
 const ps = [p1, p2, p3, p4]
 

const run = (p) => {
  p.then((d) => {
      const nextP = ps[ps.findIndex(f => f===p) +1]
      if(nextP) {
          run(nextP)
      }
  })
}
















 // 方式一，递归
 
 const run = (p) => {
     p.then((d) => {
         console.log(d)
         const nextP = ps[ps.findIndex(f => f === p) + 1]
         if (nextP) {
             run(nextP)
         }
     })
 }
 run(ps[0])
 
 // 方式二，generator 函数，也是 co 库核心
 
//  const run = (gen) => {
//      const it = gen()
//      let ret = it.next()
//      function step () {
//          if (!ret.done) {
//              ret.value.then(d => {
//                  console.log(d)
//                  ret = it.next(d)
//                  step()
//              })
//          }
//      }
//      step()
//  }
//  run(function *() {
//      for (let p of ps) {
//          yield p
//      }
//  })
 
//  // 方式三，组成 then 链
 
//  const run = () => {
//      let p = Promise.resolve()
//      ps.forEach(item => {
//          p = p.then(() => item).then(console.log)
//      })
//  }
//  run()
 
//  // 方式四，两个函数互相调用，一个负责传递数据，一个负责执行
 
//  const run = (p, cb) => {
//      if (p) {
//          p.then(d => {
//              console.log(d)
//              cb()
//          })
//      }
//  }
//  const pick = () => {
//      run(ps.shift(), pick)
//  }
//  pick()
 
//  // 方式五，async, await
 
//  const run = async function () {
//      for (let p of ps) {
//          const r = await p
//          console.log(r)
//      }
//  }
//  run()