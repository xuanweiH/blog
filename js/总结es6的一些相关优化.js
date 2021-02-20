/* 
 有关字符串的优化
  1. 模板字符串
    ES6新增了字符串模板，在拼接大段字符串时，用反斜杠(`)取代以往的字符串相加的形式，
    能保留所有空格和换行，使得字符串拼接看起来更加直观，更加优雅。
  2. string api升级
    ES6在String原型上新增了includes()方法，
    用于取代传统的只能用indexOf查找包含字符的方法(indexOf返回-1表示没查到不如includes方法返回false更明确，语义更清晰), 
    此外还新增了startsWith(), endsWith(), padStart(),padEnd(),repeat()等方法，可方便的用于查找，补全字符串
  有关数组的优化
  1. 解构赋值
    let [a,b,c] = [1,2,3] 直接对应 避免写多个let
    扩展运算符 ...   let a = [1,2,3] let b = [...a]
  2. api升级
    ES6在Array原型上新增了find()方法，用于取代传统的只能用indexOf查找包含数组项目的方法,
    js.find -> 返回符合条件的第一个数组元素值 没有则返回undefined

    且修复了indexOf查找不到NaN的bug([NaN].indexOf(NaN) === -1).
    此外还新增了copyWithin(), includes(), fill(),flat()等方法，可方便的用于字符串的查找，补全,转换等
    copyWithin 产生新数组 copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中  array.copyWithin(target, start, end)
    var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
    fruits.copyWithin(2, 0, 2);
    Banana,Orange,Banana,Orange,Kiwi,Papaya
    includes 检测字符串里面是否包含指定字符串 数组includes 检测数组里面是否含有这个数
    fill 填充数组固定元素填充 flat 解构层数

    有关对象的优化
    1. 解构赋值: let {xx} = obj
    let {apple, orange} = {apple: 'red appe', orange: 'yellow orange'};
    2. 扩展运算符: let a = {...obj}
    3.api : 
     Object.assign(target, source1, source2);
     assign合并的对象target只能合并source1、source2中的自身属性，
     并不会合并source1、source2中的继承属性，也不会合并不可枚举的属性，
     且无法正确复制get和set属性（会直接执行get/set函数，取return的值）。

     ES6在Object原型上新增了getOwnPropertyDescriptors()方法，此方法增强了ES5中getOwnPropertyDescriptor()方法，
     可以获取指定对象所有自身属性的描述对象。结合defineProperties()方法，可以完美复制对象，包括复制get和set属性。

     新增Object原型上的 getPrototypeof 和 setPrototypeOf方法
     这个方法存在的意义在于，ES5中获取设置prototype对像是通过__proto__属性来实现的，
     然而__proto__属性并不是ES规范中的明文规定的属性，
     只是浏览器各大产商“私自”加上去的属性，只不过因为适用范围广而被默认使用了

     新增ES6在Object原型上还新增了Object.keys()，
     Object.values()，Object.entries()方法，用来获取对象的所有键、所有值和所有键值对数组。

    有关函数的优化
    1. 箭头函数 没有this 无法实例化 不存在arguments对象 使用扩展运算符代替
    2. 函数形参默认值

    symbol数据类型
    独一无二的原始数据类型 用于解决对象属性太多导致重名的覆盖, 不能被for in遍历 也不是私有属性

    set 实例类似于数组 成员独一无二 轻松去重

    map object的超集 对象的key不再局限于字符串

    proxy 
*/
