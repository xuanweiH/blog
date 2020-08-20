// new Promise((resolve, reject) => {
//     console.log("promise1")
//     resolve()
// })
//     .then(() => {
//         console.log("then11")
//         new Promise((resolve, reject) => {
//             console.log("promise2")
//             resolve();
//         })
//             .then(() => {
//                 console.log("then21")
//             })
//             .then(() => {
//                 console.log("then22")
//             })
//     })
//     .then(() => {
//         console.log("then12")
//         new Promise((resolve, reject) => {
//             console.log("promise3")
//             resolve();
//         })
//             .then(() => {
//                 console.log("then31")
//             })
//     })
// console.log('script end')


// async function async1 () {
//   console.log('async1 start');
//   await console.log('promise1')
//   console.log('async1 success');
//   return 'async1 end'
// }
// console.log('srcipt start')
// async1().then(res => console.log(res))
// console.log('srcipt end')


// function promise1 () {
//   let p = new Promise((resolve) => {
//     console.log('promise1');
//     resolve('1')
//   })
//   return p;
// }
// function promise2 () {
//   return new Promise((resolve, reject) => {
//     console.log(2)
//     resolve('success')
//   })
// }
// promise1()
//   .then(res => console.log(res))
//   .then(() =>{console.log(11111)})
//   .then(() => console.log('finally1'))

// promise2()
//   .then(res => console.log(res))
//   .then(() => console.log('finally2'))



// var p1 = new Promise((resolve, reject) => {
//     console.log("promise1")
//     resolve()
// })
// p1.then(() => {
//         console.log("then11")
//         new Promise((resolve, reject) => {
//             console.log("promise2")
//             resolve();
//         })
//         .then(() => {
//             console.log("then21")
//         })
//         .then(() => {
//             console.log("then22")
//         })
//   })
// p1.then(() => {
//       console.log("then12")
//       new Promise((resolve, reject) => {
//           console.log("promise3")
//           resolve();
//       })
//       .then(() => {
//           console.log("then31")
//       })
//   })



// var myname = "极客时间"
// function showName(){
//   console.log(myname);
//   if(0){
//    var myname = "极客邦"
//   }
//   console.log(myname);
// }
// showName()


// const countWords = (words) => {
//   const counts = { };
//   for (const word of words) {
//     counts[word] = (counts[word] || 0) + 1;
//   }
//   return counts;
// };
// const counts = countWords(['constructor', 'creates', 'a', 'bug']);
// console.log(counts)

// let obj = {
//   1: 'xx',
//   2: 'hh'
// }
// console.log(obj)


// let arr = ['a', 'b']
//     let obj = {
//         'a': 1,
//         'b': 2,
//         'c': 3
//     }
//     function test () {
//       return arr.reduce((acc, curr) => {
//         acc[curr] = obj[curr]
//         console.log(acc, obj[curr])
//         return acc;
//       }, {})
//     }
//     const result = test()
//     console.log(result)


//     for (var i = 0; i < 5; i++) {
//       setTimeout(function(j) {
//           console.log(new Date, j);
//       }, 1000, i);
//   }

//   function curry (fn, args=[]) {
//      return function temp(...inner) {
//          if (inner.length>0) {
//              args=[...args,...inner]
//              return temp
//          } else {
//              const val = fn.apply(this,...args)
//              args = []
//              return val
//          }
//      }
//   }

// let data = [{
//     hai:'xxx',
//     dj: 1,
//     hh: {name:1}
// }, {
//     hai:'x1x',
//     dj: 2
// }]
// data.forEach(item => {
//     console.log(item['dj'])
// })
// let newList= Object.assign({},data)
// console.log(newList)


function curry (fn, ...args) {
    return function temp (...innerArgs) {
        if (innerArgs.length !==0) {
            args = [...args,...innerArgs]
            return temp
        } else {
           const val = fn.apply(this, ...args)
           args = []
           return val
        }
    }
}

function curry (fn, ...args) {
    return function temp (...innerArgs) {
        if (innerArgs.length === args.length) {
           return fn(...args)
        } else {
          
        }
    }
}