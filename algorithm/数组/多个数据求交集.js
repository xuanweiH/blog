

// 通过reduce方法
// 判断前一个数组中的项是否存在后一个数组中,存在则留下
// reduce依次后推到达效果

function interSection (args) {
    if (args.length === 0) return []
    if (args.length === 1) return [args[0]]
    return [...new Set(args.reduce((pre,cur) => {
        return pre.filter(item => cur.include(item))
    }))]
}







// get 交集
function getSame(args) {
   if(args.length === 0) return []
   if(args.length === 1) return [args[0]]
   return [...new Set(args.reduce((pre,cur)=>{
       return pre.filter(item => cur.include(item))
   }))]
}





// 多个数组求交集练习
function getsum(args) {
    if(args.length === 0) return
    if(args.length === 1) return [args[0]]
    return [...new Set(args.reduce((pre, cur) => {
        return pre.filter(item => cur.includes(item))
    }))]
}