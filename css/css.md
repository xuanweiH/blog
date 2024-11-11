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
