1. 三栏布局用grid的时候

```

display: grid
-- grid-template-columns
.wrap { display: grid; width: 100%; grid-template-columns: 300px auto 300px; }

```

2. transform 转换

transform 属性允许你旋转，缩放，倾斜或平移给定元素

transform-origin 转换元素的位置（围绕那个点进行转换） 默认值 （x，y，z）：（50%，50%，0）

transform： translate(120px, 50%) 位移
transform： scale() 缩放
transform: rotate() 旋转
transform: skew(30deg,20deg) 倾斜

3. animation

animation-name
animation-duration
animation-timing-function 动画时间函数
animation-delay
animation-iteration-count 动画执行次数 可以是数字也可以是infinite 无限循环
animation-direction 动画执行方向  alternate -> 奇数正向 偶数反向
animation-paly-state 动画播放状态   none | forwards -保留最后的属性 | backwards -在delay指定的时间 动画显示之前的状态 | both 在向前或者向后 什么模式下被应用;
animation-fill-mode 动画填充模式

4. 有关像素

无缩放情况下，1个css像素等于1个设备独立像素

物理像素   2倍屏就是 1个css像素等于2个物理像素 同理 3倍屏就是 1个css等于3个物理像素
设备像素由屏幕生产之后就不发生改变，而设备独立像素是一个虚拟单位会发生改变

pc端中，1个设备独立像素 = 1个设备像素 （在100%，未缩放的情况下）

在移动端中  标准屏幕 160ppi 下  1个设备独立像素 = 1个设备像素


设备像素比 dpr = 设备像素 / 设备独立像素    window.devicePixelRatio 可以获取到

当设备像素比为1:1时 使用1 1x1个设备像素显示1个css像素
当设备像素比为2:1时 使用4 2x2个设备像素显示1个css像素
当设备像素比为3:1时 使用9 3x3个设备像素显示1个css像素


每英寸像素 ppi 值越大 越清晰

ppi = 分辨率 x*y
更号 x2+y2 / 屏幕尺寸 


### css 面试题



