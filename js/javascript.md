
#### 变量对象(VO)和活动对象（AO）的区别
未进入执行阶段之前，变量对象(VO)中的属性都不能访问！但是进入执行阶段之后，变量对象(VO)转变为了活动对象(AO)，里面的属性都能被访问了，然后开始进行执行阶段的操作。它们其实都是同一个对象，只是处于执行上下文的不同生命周期。

### 执行上下文(Execution Context)

代码在运行的时候，执行的环境

#### 执行上下文在 ES3 中，包含三个部分

>+ scope：作用域，也常常被叫做作用域链。

>+ variable object：变量对象，用于存储变量的对象。

>+ this value：this 值。

#### 在 ES5 中，我们改进了命名方式，把执行上下文最初的三个部分改为下面这个样子

>+ lexical environment：词法环境，当获取变量时使用。

>+ variable environment：变量环境，当声明变量时使用。

>+ this value：this 值。

#### 在 ES2018 中，执行上下文又变成了这个样子，this 值被归入 lexical environment，但是增加了不少内容

>+ lexical environment：词法环境，当获取变量或者 this 值时使用。
>+ variable environment：变量环境，当声明变量时使用
>+ code evaluation state：用于恢复代码执行位置。
>+ Function：执行的任务是函数时使用，表示正在被执行的函数。
>+ ScriptOrModule：执行的任务是脚本或者模块时使用，表示正在被执行的代码。
>+ Realm：使用的基础库和内置对象实例。
>+ Generator：仅生成器上下文有这个属性，表示当前生成器。

#### 作用域闭包
谈闭包 先要谈作用域

当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行

一个函数执行完成以后 在某个时间 另外一个函数执行会用到第一个函数内部的作用域变量 这就是闭包

只要使用了回调函数，实际上就是在使用闭包！ 因为回调的作用就是等待被触发 触发就会使用当时函数作用域

当查找变量的时候，会先从当前上下文的 变量对象中 查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的 变量对象 中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。



模块（闭包的应用）
如果要更简单的描述，模块模式需要具备两个必要条件。

必须有外部的封闭函数，该函数必须至少被调用一次（每次调用都会创建一个新的模块实例）
封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。


闭包产生的本质就是当前作用域中存在指向父级作用域的引用

1.即时创建它的上下文已经销毁,但是它仍然存在(内部函数从父函数返回)
2.调用了自由变量(全局变量)

但是从应用层面来说 闭包经常是由两个函数嵌套 f1中return了f2 而f2中使用f1的变量

作用: 提升变量的访问权限, 延长变量的生命周期
可以让本来访问不到内部变量的外函数能够访问,
假设f1为f2父函数,f2被赋予了一个全局变量会一直存在内存中,但f2的存在也依赖于f1的变量
使得f1也一直在内存中,不会被垃圾回收机制回收.

垃圾回收机制: 标记清楚, 引用计数


#### new做了什么

1.  首先声明了一个对象
2.  该对象的\_\_proto\_\_会指向构造函数的prototype
3.  将构造函数的this指向这个对象(将构造函数的作用域赋值给新对象。（也所以this对象指向新对象）)
4.  将新对象的地址保存到等号左边的变量中\
    注意：若构造函数中没有返回值或返回值是基本类型（Number、String、Boolean）的值，则返回新实例对象；若返回值是引用类型的值，则实际返回值为这个引用 类型。
