// 如何判断用户设备

// -- 复习 
// 主要是通过navigator.userAgent来判断用户设备信息
// 也可以借用库 mobile.detect传入
//  生成md .phone .tablet 判断是手机还是平板或者其他



/* const userAgent = navigator.userAgent;
navigator.userAgent  -> 获取浏览器信息

// 判断是否为移动设备
const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

// 判断是否为特定浏览器
const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);


通过屏幕大小也可以
window.screen.width

mobile-detect.js：
插件，也是传入navigator.userAgent

const md = new MobileDetect(navigator.userAgent);

if (md.phone()) {
  console.log('是手机设备');
} else if (md.tablet()) {
  console.log('是平板设备');
} else {
  console.log('可能是桌面设备');
} 
  
react-native 判断设备
Platform.os === ios or android or harmony
import DeviceInfo from 'react-native-device-info';
 const deviceId = DeviceInfo.getDeviceId();
 deviceid可以反馈出具体型号
 iPhone16Pro iPhone16ProMax 等等





*/



// 如何将多次提交压缩成一次提交

// git rebase -i ？？


// 介绍下navigator.sendBeacon
// navigator.sendBeacon() 是 Web API 中的一个方法，用于在页面卸载（如跳转或关闭）时，
// 向服务器发送少量数据，而不会影响页面的加载性能或阻塞用户的导航。
// 发送数据给服务端
// 通常用于简单的数据统计 日志分析  不能获得响应 数据量小
navigator.sendBeacon(url, data);


// 监听事件
window.addEventListener("unload", () => {
    navigator.sendBeacon('/analytics', JSON.stringify({ event: "page_unload", time: Date.now() }));
});


document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'hidden') {
        navigator.sendBeacon('/log', JSON.stringify({ event: "tab_hidden", timestamp: Date.now() }));
    }
});

// ✅ 网站分析：记录用户行为，如离开页面时的事件。
// ✅ 日志记录：收集崩溃报告、错误日志。
// ✅ 轻量级数据提交：如保存草稿、自动上报状态。