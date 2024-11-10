// import Vue from './myvue/vue'

// const vm = new Vue({
//     el: '#app',
//     data: {
//         msg: 'Hello world'
//     },
//     methods: {
//         handler() {
//             alert(1111)
//         }
//     }

// })
// console.log(vm)

var a = 0
if(true) {
    a = 1
    function a() {}
    a = 21
    console.log('里', a , window.a)
}

console.log('外', a , window.a)