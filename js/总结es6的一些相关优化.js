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
    且修复了indexOf查找不到NaN的bug([NaN].indexOf(NaN) === -1).
    此外还新增了copyWithin(), includes(), fill(),flat()等方法，可方便的用于字符串的查找，补全,转换等


*/