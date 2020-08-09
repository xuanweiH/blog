// 首先分析promise的调用流程: 
// 1. 构造函数中会调用一个executor() 在new Promise时立即执行这个executor
// 2. 如果executor是一个异步任务 放入对应的事件队列中
// 3. 如果遇到.then() 会收集成功还是失败的回调 放入成功/失败的回调队列
// 4. executor的异步事件被执行之后, 触发resolve/reject 执行成功/失败队列 

// Promise可以看做是是一个观察者模式: 通过then触发依赖收集/异步触发resolve通知更新/resolve执行依赖

// 改进1 promise 其实是一个状态机 由pending->fulfilled 或者pending->rejected
// then()两个参数可选,分别对应成功和失败时的回调,同时then返回的也是一个promise对象 支持链式调用
const PEDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
    // 构造方法接收一个回调函数
    constructor(executor) {
        this.status = PEDING // 初始化状态
        this.value = undefined // promise返回初始化值
        this._resolveQueue = [] // 成功时回调函数队列
        this._rejectQueue = [] // 失败时回调函数队列
        let _resolve = (val) => {
            const fn = () => {
                //  如果是pending状态才会执行
                if (this.status !== PEDING) return
                this.status = FULFILLED
                this.value = val // 存储当前值
                //    如果成功队列中有有回调函数 取出所有的callback执行
                while (!this._resolveQueue.length) {
                    const callback = this._resolveQueue.shift()
                    callback(val)
                }
            }
            // promise内部其实是微任务队列 但是polyfill一般都是转为settimeout
            // 自己也可以用mutationObserver实现微任务队列
            setTimeout(fn)
        }

        let _reject = (val) => {
            const fn = () => {
                // 失败回调队列同理
                if (this.status !== PEDING) return
                this.status = REJECTED
                this.value = val // 存储当前值
                while (!this._rejectQueue.length) {
                    const callback = this._rejectQueue.shift()
                    callback(val)
                }
            }
            setTimeout(fn)
        }
        // new promise时直接执行一次executor
        // 如果executor为同步任务 为了防止resolve/reject操作跑到then之前 需要对resolve处理
        executor(_resolve, _reject)
    }
    // then方法接受一个fulfillFn rejectFn 进入队列 将函数放进成功或者失败的队列中
    then(resolveFn, rejectFn) {
        // 处理值穿透的问题
        typeof resolveFn !== 'function' ? resolveFn = value => value : null
        typeof rejectFn !== 'function' ? rejectFn = err => err : null
        // then方法返回一个promise对象保证链式调用
        return new MyPromise((resolve, reject) => {
            const fulfilledFn = (val) => {
                try {
                    // 执行当前promise的第一个回调 并获取返回值
                    let x = resolveFn(val)
                    // 如果返回值是一个promise 继续进入.then的回调, 等待promise的状态变化 如果不是直接resolve
                    x instanceof myPromise ? x.then(resolve, reject) : resolve(x)
                } catch (e) {
                    reject(e)
                }
            }
            // this._resolveQueue.push(fulfilledFn)
            const rejectedFn = (err) => {
                try {
                    // 执行当前promise的第一个回调 并获取返回值
                    let x = rejectFn(err)
                    // 如果返回值是一个promise 继续进入.then的回调, 等待promise的状态变化 如果不是直接resolve
                    x instanceof myPromise ? x.then(resolve, reject) : resolve(x)
                } catch (e) {
                    reject(e)
                }
            }
            //  this._rejectQueue.push(rejectedFn)
            // 处理如果已经状态为resolve 或者reject的情况 因为可能会出现 promise.resolve().then()
            switch (this.status) {
                case (PENDING):
                    this._resolveQueue.push(fulfilledFn)
                    this._rejectQueue.push(rejectedFn)
                    break
                case (FULFILLED):
                    fulfilledFn(this.value)
                    break
                case (REJECTED):
                    rejectedFn(this.value)
                    break
            }
        })
    }
    // 实现catch 相当于then的第二个回调
    catch (rejectFn) {
      this.then(undefined,rejectFn)
    }
    // 实现finally 返回一个promise 无论是否成功都会执行, 且后续还能继续then 并把值传给then
    finally (callback) {
        return this.then(
            value => MyPromise.resolve(callback.then((()=> value))),
            reason => MyPromise.resolve(callback.then(()=> {throw reason}))
        )
    }
    // 实现resolve
    static resolve (value) {
       if (value instanceof MyPromise) return value
       return new MyPromise(resolve => resolve(value))
    }
    // 实现reject
    static reject (reason) {
        return new MyPromise((resolve,reject) => {reject(reason)})
    }
    // 实现all
    static all (promiseArr) {
      let index = 0
      let res = []
      return new MyPromise((resolve,reject)=>{
        promiseArr.forEach((p,i) => {
            MyPromise.resolve(p).then(
                val => {
                    index++
                    res[i] = val
                    if (index === promiseArr.length) {
                        resolve(res)
                    }
                }
            ),
            err=> {
                reject(err)
            }
        });
      })
    }
    // 实现race
    static race (promiseArr) {
        return new MyPromise((resolve,reject)=>{
            for(let p of promiseArr) {
                MyPromise.resolve(p).then(
                    val => {
                        resolve(val)
                    },
                    err=>{
                        reject(err)
                    }
                )
            }
        })
    }
}

// 总结
// 先通过 成功队列 失败队列 resolve执行回调队列里的每个callback then调用将resolvefn rejectfn放进相关队列
// 1.改进 状态机 三状态
// 2. then 返回一个promise 同时考虑 直接调promise.resolve().then的传值问题
// 3. then 值透传 (必须传函数)
// 4. executor为同步时 考虑 resolve reject 应该是异步任务队列