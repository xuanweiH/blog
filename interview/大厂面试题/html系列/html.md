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

1. 行级元素和块级元素分别有哪些及怎么转换
``
块级、form、ul、li、ol、table、h1、h2、h3、h4、h5、h6、dl、dt、 p div header footer article nav 基本语义化的都是
常见的行级元素：span、a、img、button、input、select

块级元素：

总是在新行上开始，就是每个块级元素独占一行，默认从上到下排列
宽度缺少时是它的容器的100%，除非设置一个宽度
高度、行高以及外边距和内边距都是可以设置的
块级元素可以容纳其它行级元素和块级元素

行内元素：

和其它元素都会在一行显示
高、行高以及外边距和内边距可以设置
宽度就是文字或者图片的宽度，不能改变
行级元素只能容纳文本或者其它行内元素

使用行内元素需要注意的是：

行内元素设置宽度width无效
行内元素设置height无效，但是可以通过line-height来设置
设置margin只有左右有效，上下无效
设置padding只有左右有效，上下无效

``

```
什么是 DOCTYPE？

DOCTYPE 是文档类型声明（Document Type Declaration）的缩写，它是 HTML 文档中的一个特殊标签，通常位于文档的最开头。在 HTML5 中，DOCTYPE 声明非常简洁，只需写 <!DOCTYPE html> 即可。而在早期的 HTML 版本中，DOCTYPE 声明相对复杂，需要指定 DTD（文档类型定义）。


DOCTYPE 的作用

    标准模式与怪异模式：
        标准模式（Standards Mode）：浏览器会严格按照 W3C 的标准来解析和渲染 HTML 和 CSS。
        怪异模式（Quirks Mode）：浏览器会以一种向后兼容的方式来解析和渲染页面，模仿老版本浏览器的行为。这种模式主要是为了兼容那些在标准模式下不能正确显示的旧网页。

    DOCTYPE 声明的主要作用就是触发浏览器的标准模式。没有正确的 DOCTYPE 声明，浏览器可能会进入怪异模式，从而导致页面在不同浏览器之间出现渲染不一致的问题。

    解析规则：
        DOCTYPE 声明告诉浏览器应该如何解析文档。这对于使用不同版本的 HTML 和 XHTML 编写的文档尤为重要，因为不同版本之间的解析规则可能存在差异。

    浏览器行为一致性：
        正确的 DOCTYPE 声明可以确保浏览器在渲染页面时采用一致的标准，从而减少不同浏览器之间的渲染差异。这对于跨浏览器兼容性非常重要。


html 5之后 <!DOCTYPE html>
html 4.01 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
xhtml 1.0 strict
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

DOCTYPE 声明是确保网页在不同浏览器中以一致方式渲染的关键。它通过触发浏览器的标准模式，确保页面按照 W3C 的标准进行解析和渲染，从而避免怪异模式下可能出现的兼容性问题。对于现代网页开发，建议使用简单的 HTML5 <!DOCTYPE html> 声明。

```

3. 前端页面的三层结构
```
结构层（structural layer）
结构层类似于盖房子需要打地基以及房子的悬梁框架，它是由HTML超文本标记语言来创建的，也就是页面中的各种标签，在结构层中保存了用户可以看到的所有内容，比如说：一段文字、一张图片、一段视频等等


表示层（presentation layer）
表示层是由CSS负责创建，它的作用是如何显示有关内容，学名：层叠样式表，也就相当于装修房子，看你要什么风格的，田园的、中式的、地中海的，总之CSS都能办妥


行为层（behaviorlayer）
行为层表示网页内容跟用户之间产生交互性，简单来说就是用户操作了网页，网页给用户一个反馈，这是JavaScript和DOM主宰的领域


```
iframe的作用以及优缺点
```
优点：可以在页面上独立显示一个页面或者内容,不会与页面其他元素产生冲突。
可以在多个页面中重用同一个页面或者内容,可以减少代码的冗余。
加载是异步的,页面可以在不等待 iframe 加载完成的情况下进行展示。
方便地实现跨域访问

缺点：搜索引擎可能无法正确解析 iframe 中的内容
会阻塞主页面的 onload 事件
和主页面共享连接池,影响页面并行加载


```