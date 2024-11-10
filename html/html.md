### META

**http-equiv** 指定http头部的策略：

**x-ua-compatible**  使高版本的浏览器可以按照低版本的兼容性渲染

指定content就行，content=“ie=7;ie=9”说明ie7 8可以按ie7渲染 ie9用ie9渲染

expires指定网页到期时间

pragma 指定网页的cache模式 content=“no cache”

\*\*content-type \*\*：content-type\:text/html。这将告诉浏览器准备接受一个 HTML 文档。 --感觉效果和name一样

 **name**

\<meta name="description" content="Free Web tutorials">\
\<meta name="keywords" content="HTML,CSS,JavaScript">\
\<meta name="author" content="Hege Refsnes">

keywords搜索引擎&#x20;

### SEO

1.  title 标签
2.  meta description
3.  meta keywords
4.  html 语义化
5.  重要的东西放前面
6.  少用 iframe
7.  爬虫地图文件



### BOM

BOM 对象的常用方法
location 地址 
navigator  访问浏览器的信息 appname appversion useragent
screen 屏幕信息
history  浏览器历史 back forward
```
window
  - hashchange
  - open
  - alert
  - navigate  -> 常用于替换 window.location.href
location：

window.location.href     → 'https://www.jianshu.com/search?q=JS#comments'
               .origin   → 'https://www.jianshu.com'
               .protocol → 'https:'
               .host     → 'www.jianshu.com'
               .hostname → 'www.jianshu.com'
               .port     → ''
               .pathname → '/search/'
               .search   → '?q=JS'
               .hash     → '#comments'

window.location.assign('url')
               .replace('url')
               .reload()
               .toString()


.assign导航到指定 URL.replace()导航到指定 URL并删除当前页面的访问记录.reload()重新加载当前页面.toString()返回 URL 字符串


navigator：
navigator.sendBeacon(url, params) 埋点  -> params类型 ArrayBuffer Blob DOMString
navigator.getBattery() 电池信息监控
navigator.geolocation

history：

history.pushState() ->  hash模式路由   三个参数 state title url 向历史记录中添加一个状态
history.replaceState() -> history路由

history对象发生变化的时候 会触发popstate



```

### SCRIPT

defer 等渲染好了有序执行

async 等下载好了立马执行

如果当脚本不依赖其他脚本的时候，使用async，这样脚本时机会比 defer 更快
如果一个脚本依赖另一个脚本，使用defer，保证执行顺序有序执行
当你的脚本存在获取DOM的操作时，应该使用defer因为，使用 async可能获取的到DOM可能获取不到，async下载完会立即执行脚本，导致解析HTML暂停

#### LINK 

-preload/prefetch

preload 告诉浏览器立即加载资源，例如：希望加载完字体以后再进行渲染。
prefetch 告诉浏览器在空闲时才开始加载资源
preload、prefetch 仅仅是加载资源，并不会“执行”
preload、prefetch 均能设置、命中缓存
正确使用 preload、prefetch 不会导致重复请求

link 与@import
link 与 import , 本质使用上，我们都是用他来引入 css，但是他们有一定的区别。

link 是一种引入资源的标签，import 是引入 css 的方式。所以，import 引入的只能是 css，而 link 可以引入所有的资源，包括图片，RSS 等。

加载顺序上也有一些差异。link 引用的 CSS 会同时被加载。import 引用的 CSS 会等到页面全部被下载完再加载。

兼容性的差别。link 无任何兼容问题，import 兼容 IE5 以上。（当然，IE5 估计也找不到了）

动态引入样式 link 可以后期引入样式，而 import 是不可以后期引入的，只能初始化页面之前引入。

复用率的问题 import 可以复用之前的 css 文件，而 link 只能一次引用一个文件。当然，import 复用文件时，在浏览器实际上是加载了多个文件，会有多个请求。而每一个 link 只是一个 http 请求。