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



var myname = "极客时间"
function showName(){
  console.log(myname);
  if(0){
   var myname = "极客邦"
  }
  console.log(myname);
}
showName()