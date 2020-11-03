// 简述二分查找

// ------ 二分查找 用简单的理解方式就是每次把期望的值 对半拆分
// 比如 猜一个数 介于0-100之间, 第一次猜 告诉你大于50还是小于50然后依次
// 对半拆分 直到猜中为止

// 查找一个数item在不在items里面
function binarySearch(items, item) {
    let low = 0
    let hign = items.length - 1,
    // 中位index mid  中位元素elem
    mid, elem
    while(low<=high) {
        mid = Math.floor((low+hign)/2)
        elem = items[mid]
        if (elem<item) {
            low = mid -1
        } else if(elem>item) {
            high = mid -1 
        } else {
            return mid
        }
    }
    return -1
}