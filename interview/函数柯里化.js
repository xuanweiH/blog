// 实现add(1)(2)(3)
// 考点：函数柯里化

// 函数柯里化概念： 柯里化（Currying）是把接受多个参数的函数转变为接受一个单一参数的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。

// 暴力解
// function add (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// 参数未知的柯里化
// function currying (fn, args=[]) {
//   console.log(fn ,args)
//   return function temp(...innerArgs) {
//       console.log(innerArgs)
//       if (innerArgs.length !== 0) {
//           args = [...args, ...innerArgs]
//           return temp
//       } else {
//           const val = fn.apply(this,args)
//           console.log(val)
//           args = []
//           return val
//       }
//   }
// }
// const sum = (...args) => args.reduce((a, b) => a + b);
// let add = currying(sum)
// console.log(add(1)(2,3)(4)())


// 参数已知情况下的柯里化
function curry (fn) {
    if (fn.length <= 1) return fn
    const generator = (...args) => {
        if(fn.length === args.length) {
            return fn(...args)
        } else {
            return (...args2) => {
                return generator(...args, ...args2)
            }
        }
    }
    return generator
}
// const add1 = (...args) => args.reduce((a, b) => a + b);
const add2 = (a,b,c) => a+b+c
const addd = curry(add2)
// const addd2 = curry(add2)
console.log(addd(1))


