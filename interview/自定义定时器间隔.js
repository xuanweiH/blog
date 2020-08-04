// 第 1 题：写一个 mySetInterVal(fn, a, b),
// 每次间隔 a,a+b,a+2b,...,a+nb 的时间，
// 然后写一个 myClear，停止上面的 mySetInterVal

function mySetInterVal(fn, a, b) {
  this.time = 0
  this.handler = null
  this.a = a
  this.b = b
  this.start = () => {
      this.handler = setTimeout(() => {
         fn()
         this.time++
         this.start()      
      }, this.a + this.time*this.b)
  }
  this.stop = () => {
      clearTimeout(this.handler)
      this.time = 0
  }
}
var a = new mySetInterVal(()=>{console.log(123)},1000,2000)
a.start()
a.stop()