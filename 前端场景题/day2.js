// 1.电梯导航该如何实现
// sticky？
// 通过 window.scroll 事件计算元素位置，配合 offsetTop 实现导航高亮
// ：获取目标元素位置后设置 document.documentElement.scrollTop
// 点击导航跳转
navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = document.getElementById(item.dataset.target);
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    });
  });
  
  // 滚动时高亮
  window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
      if (section.offsetTop <= window.scrollY + 100) {
        navItems[index].classList.add('active');
      }
    });
  });



// 初始化观察器
// ：IntersectionObserver + scrollIntoView
// 使用 scrollIntoView({ behavior: 'smooth' }) 实现动画效果
// 监听视口 elm.isIntersecting
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;
        document.querySelector(`[data-target="${targetId}"]`).classList.add('active');
      }
    });
  }, { threshold: 0.5 });
  
  // 监听所有区块
  document.querySelectorAll('.section').forEach(section => observer.observe(section));
  
  // 点击导航
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const target = document.getElementById(item.dataset.target);
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
  


// 2.退出浏览器之前，发送积压的埋点数据请求 该如何做

// 监听 visibleChange事件
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      sendPendingData();
    }
  });
//   在部分浏览器（如 iOS Safari）中，visibilitychange 可能未被触发
// ，需补充监听 pagehide 或 beforeunload 事件
// 数据上报 建议使用
navigator.sendBeacon()
// FormData blob 支持 需要注意url长度限制
const data = new FormData();
data.append('logs', JSON.stringify(pendingData));
navigator.sendBeacon('/api/log', data);
// 图片打点 通过动态创建 Image 对象发送 GET 请求，兼容老旧浏览器
const params = new URLSearchParams(pendingData);
new Image().src = `/api/log.gif?${params}`;




// 完整代码
// 数据缓存队列
let pendingLogs = [];

// 常规上报（非关闭场景）
function logEvent(data) {
  pendingLogs.push(data);
  if (pendingLogs.length >= 10) { // 批量上报阈值
    sendBatchLogs();
  }
}

// 页面关闭时上报
function sendPendingData() {
  if (pendingLogs.length === 0) return;
  
  const data = new FormData();
  data.append('logs', JSON.stringify(pendingLogs));
  
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/log', data);
  } else {
    fetch('/api/log', { 
      method: 'POST', 
      body: data, 
      keepalive: true 
    });
  }
}

// 事件监听
document.addEventListener('visibilitychange', sendPendingData);
window.addEventListener('pagehide', sendPendingData);



// 3.如何统计页面的long task长任务
// 这是浏览器原生支持的监测方式，能实时捕获执行超过50毫秒的任务
const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log('长任务信息：', {
       开始时间: entry.startTime,
       持续时间: entry.duration,
       触发源: entry.attribution
      });
    });
  });
  observer.observe({ type: 'longtask', buffered: true });
    let longTaskCount = 0;
    let totalDuration = 0;
    observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        longTaskCount++;
        totalDuration += entry.duration;
    });
    });
    observer.disconnect();
    console.log(`长任务次数：${longTaskCount}，总耗时：${totalDuration}ms`);
