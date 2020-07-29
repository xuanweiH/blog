// 思路: 1.首先传入的应该是引用类型 如果不是直接返回基础类型本身
// 2. 考虑数组 如果是数组 就以[]为基准 对象则为{}
// 3. 考虑循环引用 通过一个map结构来解决 如果有循环引用 则直接拿到克隆过的对象
// 4. 通过weakmap弱引用来优化内存
// 5. forin遍历效率优化

function deepClone(target, map = new WeakMap()) {
    let cloneTarget
    if (typeof target === 'object') {
        let isArray = Array.isArray(target)
        cloneTarget = isArray ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)
        // for (let key in target) {
        //     cloneTarget[key] = deepClone(target[key], map)
        // }
        if (isArray) {
            foreach(target, (value, key)=> {
                cloneTarget[key] = deepClone(target[key], map)
            })
        } else {
            const keys = Object.keys(target)
            foreach(keys, (value, key)=>{
                key = value
                cloneTarget[key] = deepClone(target[key], map)
            })
        }
        return cloneTarget
    } else {
        return target
    }
}

// for in 遍历效率较低 考虑使用效率较高的while 来封装一个遍历
function foreach(arr, cb) {
   let index = -1
   while (index++ < arr.length) {
       cb(arr[index], index)
   }
   return arr
}