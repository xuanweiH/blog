// bind 与 call apply 不一样的地方在于, 它改变this以后并不会立即执行函数,而是创建一个新函数.apply
// 同时bind 有以下一个特性
// 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
Function.prototype.bind2 = function (context) {
  if (typeof this !== 'function') {throw new Error('needFunction')}
  var self = this
  var args = Array.prototype.slice.call(arguments,1)
  var Temp = function () {}
  var fBound =  function () {
      var bindArgs = Array.prototype.slice.call(arguments,1)
      // this instanceof fbound 
      // 如果作为构造函数的话 结果为true 可以让实例获得来自绑定函数的this
      // 如果作为普通函数 this指向window 结果为false 绑定函数指向context
      return self.apply(this instanceof fbound? this : context,
        args.concat(bindArgs))
  }
  Temp.prototype = this.prototype
  fBound.prototype = new Temp()
  return fBound
}



// Function.prototype.bind2 = function (context) {
//     if(typeof this !== 'function') {throw new Error()}
//     var self = this
//     var args = Array.prototype.slice.call(arguments,1)
//     var Temp = function() {}
//     var fBind = function () {
//         var bindArgs = Array.prototype.slice.call(arguments,1)
//         return self.apply(this instanceof fBind ? this:context, args.concat(bindArgs))
//     }
//     Temp.prototype = this.prototype
//     fBind.prototype = new Temp()
//     return fBind
// }
















