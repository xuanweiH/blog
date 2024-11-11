// 词法作用域 vs 动态作用域
// 词法作用域 函数声明时的作用域   动态作用域 函数调用时的作用域
// var val = 1
// function test() {
//     console.log(val,'输出什么')
// }

// function bar() {
//     var val = 2
//     test()
// }

// bar();
// console.log()

// 闭包
// for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
//   }


//   function foo() {
//     const a = 12
//     return function bar() {
//       console.log(a)
//     }
//   }
  
//   const bar = foo()
//   bar()


function twoPlus(a, b) {
    return 2 + a + b
  }
  
  // const sum = twoPlus.myBind(null, 1)
  const sum = twoPlus.bind(null, 1)
  console.log(sum(2), 'sum')