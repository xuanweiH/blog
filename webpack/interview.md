### webpack

#### 1. webpack的module是什么

webpack支持esmodule commonjs amd asset
1. esm 
关键字 export 
允许将esm中内容暴露给其他模块

关键字import

```
import { a } from './a.js'

export { bb };

```

// package.json
type: module -> esm


#### chunk和bundle的区别是什么

1. chunk 
chunk是webpack打包过程中modules的集合 是(打包过程中)的概念
webpack 的打包是从一个入口模块开始, 入口模块引用其他模块 其他慕课引用其他模块

webpack通过引用关系逐个打包模块 这些module就形成了chunk
如果是多入口模块, 可能会产生多条打包路径 每条路径都会形成chunk
2. bundle
我们最终输出的一个或者多个打包好的文件

3. chunk 和 bundle的关系是什么
大多数情况下, 一个chunk会产生一个bundle 但是也有例外
如果加了sourcemap 一个entry 一个chunk对应有两个buddle

chunk是过程中的代码 bundle是打包结果输出的代码 chunk在构建完成就呈现bundle

4. split chunk

#### plugin 和 loader 分别是什么? 怎么工作的

1. loader 
模块转换器, 将非js模块转为webpack能识别的js模块.
本质上, webpack loader将所有类型的文件,转换为应用程序的依赖图可以直接引用的模块

2. plugin
扩展插件, webpack运行的各个阶段, 都会广播出对应的事件, 插件去监听对应的事件 

3. compiler
对象,包含了webpack环境的所有配置信息, 包括options loader plugins
webpack启动的时候实例化, 它在全局是唯一的
, 可以理解为webpack的实例

4. compliation
包含了当前模块资源, 编译生成资源
webpack在开发模式下运行的时候,每当检测到一个文件变化,就会闯一次新的compliation

#### 简单描述webpack打包过程
1. 初始化参数": shell webpack.config.js
2. 开始编译 初始化complier对象 加载所有配置 开始执行编译
3. 确定入口: 根据entry中的配置找到所有的入口文件
4. 编译模块: 从入口文件开始,调用所有loader,再去递归寻找依赖
5. 完成模块编译: 得到每个模块被翻译后的最终内容以及他们之前的依赖关系
6. 输出资源: 根据得到的依赖关系, 组装成一个个包含多个module的chunk.
7. 输出完成: 根据配置, 确定要输出的文件名以及文件路径