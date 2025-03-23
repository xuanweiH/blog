// 1. perfoemanceobserve如何测量页面性能
new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log('长任务信息：', {
       开始时间: entry.startTime,
       持续时间: entry.duration,
       触发源: entry.attribution
      });
    });
  });
  observer.observe({ type: 'longtask', buffered: true });
  observer.disconnect();
// 2. 移动端如何实现下拉加载

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loadMoreData();
  }
});
// 底部加哨兵元素
observer.observe(document.querySelector('#loadMoreTrigger')); // 监听底部占位元素



// 或者纯js
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  
  // 判断是否滚动到底部（距离阈值通常设为10-50px）
  if (scrollTop + clientHeight >= scrollHeight - 50) {
    loadMoreData();
  }
});

function loadMoreData() {
  // 发起请求加载数据，并更新DOM
}



// 3. 判断页签是否为活跃状态  document.hidden

// 判断页面是否处于活跃状态
function isPageActive() {
    return !document.hidden;
  }
  
  // 当页面的可见状态发生变化时触发
  document.addEventListener("visibilitychange", function () {
    if (isPageActive()) {
      console.log("页面处于活跃状态");
    } else {
      console.log("页面处于非活跃状态");
    }
  });
  
  // 示例：在 5 秒后切换到另一个标签页，然后切换回来
  setTimeout(function () {
    console.log("5 秒后切换标签页...");
  }, 5000);
  