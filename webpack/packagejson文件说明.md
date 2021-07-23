#### 有关package.json文件的字段相关说明


##### name
name字段必须小于214个字符 不能以.或者_开头也不能有大写字母
因为名称最终成为URL的一部分不能包含任何非URL安全字符.
该参数会传递给require 它应该是简短的,具有合理性的描述

##### version
version的格式一般是x. x. x 版本作为一个标识符
每次发布的时候版本不能与已经存在的一致

##### description
用于描述npm库中搜索的时候发现你的模块

##### keywords
字符串组成的数组, 有助于人们在npm库中搜索的时候发现你的模块

##### homepage
homepage一般用于写项目的主页地址

##### bugs
bugs用于项目问题的反馈issue的地址或者一个邮箱
: {
    url, email
}

##### license
license是当前项目的协议，让用户知道他们有何权限来使用你的模块，以及使用该模块有哪些限制。

##### author字段 contributors字段
作者与合作贡献者

##### files字段
files属性的值是一个数组，内容是模块下文件名或者文件夹名，如果是文件夹名，则文件夹下所有的文件也会被包含进来（除非文件被另一些配置排除了）
可以在模块根目录下创建一个.npmignore文件，写在这个文件里边的文件即便被写在files属性里边也会被排除在外，这个文件的写法与.gitignore类似。

##### main字段
main字段指定加载的入口文件, require导入的时候就会加载这个文件,默认是模板根目录下面的index.js

##### bin字段

bin项用来指定每个内部命令对应的可执行文件的位置。如果你编写的是一个node工具的时候一定会用到bin字段。

当我们编写一个cli工具的时候，需要指定工具的运行命令，比如常用的webpack模块，他的运行命令就是webpack。
当我们执行webpack命令的时候就会执行bin/index.js文件中的代码。
在模块以依赖的方式被安装，如果存在bin选项。在node_modules/.bin/生成对应的文件，
Npm会寻找这个文件，在node_modules/.bin/目录下建立符号链接。由于node_modules/.bin/目录会在运行时加入系统的PATH变量，因此在运行npm时，就可以不带路径，直接通过命令来调用这些脚本。
所有node_modules/.bin/目录下的命令，都可以用npm run [命令]的格式运行。在命令行下，键入npm run，然后按tab键，就会显示所有可以使用的命令。


##### man字段
man用来指定当前模块的man文档的位置。

##### directories
directories制定一些方法来描述模块的结构, 用于告诉用户每个目录在什么位置。

##### repository
指定一个代码存放地址，对想要为你的项目贡献代码的人有帮助
```
"repository": {
   "type": "git",
   "url": "xxxxx"
}
```

##### scripts
scripts指定了运行脚本命令的npm命令行缩写，比如start指定了运行npm run start时，所要执行的命令。

使用scripts字段可以快速的执行shell命令，可以理解为alias。

scripts可以直接使用node_modules中安装的模块，这区别于直接运行需要使用npx命令

##### config 
config字段用于添加命令行的环境变量。
