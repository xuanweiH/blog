// 魔术师手中有一堆扑克牌，观众不知道它的顺序，接下来魔术师：

// 从牌顶拿出一张牌， 放到桌子上
// 再从牌顶拿一张牌， 放在手上牌的底部
// 如此往复（不断重复以上两步），直到魔术师手上的牌全部都放到了桌子上。

// 此时，桌子上的牌顺序为： (牌顶) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌底)。

// 问：原来魔术师手上牌的顺序，用函数实现。

// 思路: 假设魔术师手上的原先的牌为 oldArr  桌子上的牌为 newArr
// 每次从 oldArr 取出顶部一张 放到 newArr的最前面 然后再取顶部一张 放到oldArr最后
// 最后得知 newArr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// 如果反过来思考oldArr最后一个放到第一个前面去  newArr从头部取一张回到手上oldArr

// const newArr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
// const backSort = (newArr) => {
//    const oldArr = []
//    for (let i=0; i<newArr.length;i++) {
//        if(oldArr.length) {
//            const item = oldArr.pop()
//            oldArr.unshift(item)
//        }
//        oldArr.unshift(newArr[i])
//    }
//    return oldArr
// }

const calc = (arr) => {
    const origin = [];
    for (let i = 0; i < arr.length; i++) {
        if (origin.length) {
            const item = origin.pop();
            origin.unshift(item);
        }
        origin.unshift(result[i])
    }
    return origin;
}

// 测试
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// 原有顺序
console.log(calc(result))
// [13, 2, 12, 6, 11, 3, 10, 5, 9, 1, 8, 4, 7]
// console.log(backSort(newArr))
// [ 13, 2, 12, 6, 11, 3, 10, 5, 9, 1, 8, 4, 7 ]

