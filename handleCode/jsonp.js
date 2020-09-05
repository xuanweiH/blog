// 手写一个jsonp
// jsonp的主要原理就是利用srcipt的src文件能直接发起get请求,所以可以用于解决跨域问题

// 预计发起jsonp格式如下
// jsonp({
//     url:'xxx',
//     params: {
//         a:'ss',
//         b:'ss'
//     }
// }).then(res => {
    
// })

// 参数 URL,params,以及callbackName
const jsonp = ({url,params,callbackName}) => {
    // 产生一个url由src直接发起
    // url = xxxx a=ss&b=ss&callback=xxx
    const genUrl = () => {
        let datastr = ''
        for(let key in params) {
            datastr += `${key}=${params[key]}&`
        }
        datastr+= `callback=${callbackName}`
        return `${url}${datastr}`
    }
    return new Promise((resolve,reject) => {
        // 初始化函数名称 如果没传函数名就自己造一个
        callbackName = callbackName || Math.random().toString.replace(',','')
        let scriptEle = document.createElement('script')
        scriptEle.src = genUrl()
        document.appendChild(scriptEle)
        // 调用函数
        window[callbackName] = (data) => {
            resolve(data)
            document.body.removeChild(scriptEle)
        }
    })
}

// --------------------服务端响应--------------------
let express = require('express')
let app = express()
app.get('/', function(req, res) {
  let { a, b, callback } = req.query
  console.log(a); // 1
  console.log(b); // 2
  // 注意哦，返回给script标签，浏览器直接把这部分字符串执行
  res.end(`${callback}('数据包')`);
})
app.listen(3000)

// 本地调用
jsonp({
    url: 'http://localhost:3000',
    params: { 
      a: 1,
      b: 2
    }
  }).then(data => {
    // 拿到数据进行处理
    console.log(data); // 数据包
  })
  