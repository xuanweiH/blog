// 练习手写promise 学习promise的过程- 
// promise 主体思想, new promise时传入executor去执行


// 1.引入状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
    constructor(executor) {
        this._resolveQueue = []
        this._rejectQueue = []
        this._status = PENDING
        this._value = undefined
        // 5.resolve reject 应该是异步
        let _resolve = (val) => {
            const run =()=>{
                if (this._status !== PENDING) return
                this._status = FULFILLED
                this._value = val
                while(this._resolveQueue.length) {
                    const callback = this._resolveQueue.shift()
                    callback(val)
                }
            }
            setTimeout(run)
        }
        let _reject = (val) => {
            const run = () =>{
                if (this._status !== PENDING) return
                this._status = REJECTED
                this._value = val
                while(this._rejectQueue.length) {
                    const callback = this._rejectQueue.shift()
                    callback(val)
                }
            }
            setTimeout(run)
        }
        executor(_resolve,_reject)
    }
    // 2. then 返回的链式调用
    then(resolveFn,rejectFn) {
        // 3.值透传
        typeof resolveFn !== 'function' ? resolveFn = value=>value :null
        typeof rejectFn !== 'function' ? rejectFn = err=>err :null
        return new MyPromise((resolve,reject)=>{
           const fulfilledFn = (val) => {
               try {
                  // 首先得到第一个处理的结果 如果是promise就继续then
                  let x = resolveFn(val)
                  x instanceof MyPromise ? MyPromise.then(resolve,reject) : resolve(x)
               } catch (e) {
                  reject(e)
               }
           }
           const rejectedFn = (err) => {
                try {
                    // 首先得到第一个处理的结果 如果是promise就继续then
                    let x = resolveFn(err)
                    x instanceof MyPromise ? MyPromise.then(resolve,reject) : resolve(x)
                } catch (e) {
                    reject(e)
                }
           }
           // 4. 状态已经变更的情况
           switch(this._status) {
               case(PENDING):
               this._resolveQueue.push(fulfilledFn)
               this._rejectQueue.push(rejectedFn)
               break
               case(FULFILLED):
               fulfilledFn(this._value)
               break
               case(REJECTED):
               rejectedFn(this._value)
           }

        })

    }
    // catch 相当于是then的第二个方法
    catch (rejectFn) {
        return this.then(undefined,rejectFn)
    }
    // finally 传入一个回调 一定会执行 并且保证返回的还能继续then
    finally (callback) {
         return this.then(
             val => MyPromise.resolve(callback()).then(()=>val),
             reason => MyPromise.resolve(callback()).then(() => {throw reason})
         )
    }
    // resolve 判断传入是否是promise对象 如果是就直接返回 如果不是 转换promise状态->resolve
    static resolve(value) {
       if (value instanceof MyPromise) return val
       return new MyPromise(resolve=>resolve(value))
    }
    static reject(err) {
       if (err instanceof MyPromise) return err
       return new MyPromise((resolve,reject)=>reject(err))
    }
    // all 
    static all (promiseArr) {
        let index = 0
        let res = []
        return new MyPromise((resolve,reject)=>{
            promiseArr.forEach((p,i) => {
                MyPromise.resolve(p).then(value=>{
                    index++
                    res[i] = value
                    if (i === promiseArr.length) {
                        resolve(res)
                    }
                },err=>{
                    reject(err)
                })
            })
        })
    }
    // race
    static race (promiseArr) {
        return new MyPromise((resolve,reject)=>{
           for (let p of promiseArr) {
               MyPromise.resolve(p).then(value=>{
                   resolve(value)
               },err=>{
                   reject(err)
               })
           }
        })
    }
}