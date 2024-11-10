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

