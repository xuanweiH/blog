// apply 和 call的区别就在于 apply传递的第二个参数是一个数组, 而call是一系列的参数分列2,3,4,5如果有多少就传多少

function myApply (context,arr) {
    context ? Object(context) : window
    context.fn = this
    var args = []
    var res
    if (!arr) {
        res = context.fn()
    } else {
        for (var i=0;i<arr.length;i++) {
            args.push('arr['+i+']')
        }
          res = eval('context[fn]('+args+')')
    }
   
    delete context[fn]
    return res
}