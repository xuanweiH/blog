#### html

##### html5新特性


```
1. 新增图像, 位置, 存储
新增 canvas  video audio 
本地离线存储 localstorage / sessionStorage
语义化标签
位置API geolocation
表单控件类型 calendar date time email url search
web worker
websocket
拖拽 API: drag,drop

移除元素: frame frameset noframes
DOCTYPE: 声明方式区分重要因素/新增的结构-功能???

2. 如何处理HTML5新标签的浏览器兼容
IE6/IE7/IE8支持document方法产生的标签, 利用这一特性可以让浏览器
支持html5标签
1. 在<head>中调用以下代码
<!--[if it IE9]>
<script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js" ></script>
<![endif]-->
2. 载入后, 初始化新标签的css
header, section, footer, aside, nav, main, article, figure { display: block; }

3. html5离线缓存怎么做
manifest
在页面头部加入 manifest 属性 1<html manifest='cache.manifest'>
先请求mainfest文件下载相应的内容.如果第一次访问会下载.如果已经访问过并且离线缓存过, 浏览器会用离线缓存资源加载页面, 然后对比新旧manifest 
在 cache.manifest 文件中编写离线存储的资源 CACHE MANIFEST #v0.11 CACHE:

js/app.js css/style.css
资源对比.
```