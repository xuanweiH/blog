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
// function curry (fn) {
//     console.log('fn',fn)
//     console.log('fn',fn.length)
//     if (fn.length <= 1) return fn
//     const generator = (...args) => {
//         console.log(args)
//         if(fn.length === args.length) {
//             return fn(...args)
//         } else {
//             return (...args2) => {
//                 return generator(...args, ...args2)
//             }
//         }
//     }
//     return generator
// }
// // const add1 = (...args) => args.reduce((a, b) => a + b);
// const add2 = (a,b,c) => a+b+c
// const addd = curry(add2)
// // const addd2 = curry(add2)
// console.log(addd(1)(2,3))


// 经典面试题
// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;
// function add() {
//     // 第一次执行时，定义一个数组专门用来存储所有的参数
//     var _args = Array.prototype.slice.call(arguments);

//     // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//     var _adder = function() {
//         _args.push(...arguments);
//         return _adder;
//     };

//     // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//     _adder.toString = function () {
//         return _args.reduce(function (a, b) {
//             return a + b;
//         });
//     }
//     return _adder;
// }
// add(1)(2,3)(4).value()   
// 输出： 10
// 这道题考验的就不是函数柯里化了,而是闭包的运用哈哈哈
function add () {
    const args = Array.prototype.slice.apply(arguments)
    let nums = [...args]
    function addFn () {
        const args2 = Array.prototype.slice.apply(arguments)
        nums.push(...args2)
        return addFn
    }
    addFn.value = () => {
        const sum = nums.reduce((a,b) => a+b ,0)
        return sum
    }
    return addFn
}
console.log(add(1)(2,3)(4).value())   