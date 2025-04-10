// 防抖和节流是js中常用的优化方案

// 防抖主要原理是 在一定时间内只执行一次,一段时间内多次执行则以最后一次为准
// 防抖也分两种 一种是非立即执行 ns后再触发 一种是点击后会立即触发
// 常用于 搜索框检索 onresize

/**
 *
 * @param fn 传递的函数
 * @param delay 延迟时间 不给默认传1000
 * @param immediate 是否立即执行
 *
 */
function debounce(fn, delay = 1000, immediate) {
  let timer;
  return function () {
    let self = this;
    if (timer) clearTimeout(timer);
    if (!timer && immediate) {
      fn.apply(self, arguments);
    }
    timer = setTimeout(() => {
      fn.apply(self, arguments);
    }, delay);
  };
}
/**
 *
 * @param fn 传递的函数
 * @param gap 时间差 不给默认传1000
 *
 */
// 标识版本
function throttle(fn, gap = 1000) {
  let timer;
  return function () {
    let self = this;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(self, arguments);
      }, gap);
    }
  };
}
// 时间戳版本
function throttle(fn, gap = 1000) {
  let lastTime = 0;
  return function () {
    let self = this;
    let nowTime = new Date().getTime();
    if (nowTime - lastTime > gap) {
      fn.apply(self, arguments);
      lastTime = nowTime;
    }
  };
}

// 手写防抖练习
// 防抖: 一段时间内的操作只执行最后一次操作
function debounce(fn, delay = 1000, immediate) {
  let timer;
  return function () {
    let self = this;
    if (timer) clearTimeout(timer);
    if (!timer && immediate) {
      fn.apply(self, arguments);
    }
    timer = setTimeout(() => {
      fn.apply(self, arguments);
    }, delay);
  };
}

// 防抖-> 一段时间内执行按最后一次触发
function debounce(fn, delay = 1000) {
  let timer;
  return function () {
    let self = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = settimeout(() => {
      fn.apply(self, arguments);
    }, delay);
  };
}

// 节流
function throttle(fn, gap = 1000) {
  let lastTime = 0
  return function() {
      let self = this;
      let nowTime = new Date().getTime();
      if(nowTime - lastTime > gap) {
          fn.apply(self, arguments)
          lastTime = nowTime
      }
  }

}

// 节流优化

function throttle(fn, delay) {
  let timer = null
  let startTime = Date.now()
  return function () {
    let curTime = Date.now()
    let self = this
    let remain = delay - (curTime-startTime)
    clearTimeout(timer)
    if(remain <=0) {
      fn.apply(self, arguments)
      startTime = Date.now()
    } else {
      timer = setTimeout(fn, remain)
    }

  }
}