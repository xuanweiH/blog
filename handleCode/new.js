/* 要实现一个new 首先考虑 new关键字到底做了那些事情

1. 创建一个新对象
2. 将这个对象继承构造函数的原型
3. 将this指向这个实例对象
4. 判断返回的是否是个对象 否则返回this */

function myNew(ctx, ...args) {
  // 首先可以判断是一下new后面的是否是构造函数
  if (typeof ctx !== "function") {
    throw Error("First argument is not a constructor function!!!");
  }
  // 1.创建一个对象
  let obj = {};
  // 2.继承构造函数的原型
  obj.__proto__ = Object.create(ctx.protoType);
  // 3. 获取this指向
  let res = ctx.apply(obj, ...args);
  // 4. 判断结果
  let isObj = typeof res === "object" && res !== null;
  let isFun = typeof res === "function";
  isObj || isFun ? res : obj;
}

// 手写一个new
// 1. 创建一个对象
// 2. 继承构造函数的原型
// 3. 将this指向修改
// 4. 判断返回是否为一个对象

function myNew(ctx, ...args) {
  // 首先判断是否为构造函数
  if (typeof ctx !== "function") {
    throw Error();
  }
  let obj = {};
  obj.__proto__ = Object.create(ctx.protoType);
  let res = ctx.apply(obj, ...args);
  // 4. 判断结果
  let isObj = typeof res === "object" && res !== null;
  let isFun = typeof res === "function";
  isObj || isFun ? res : obj;
}
