/**
 * 自定义 AJAX 请求函数
 * @param {Object} options 配置对象，包含以下参数：
 *   method: 请求方法，默认 'GET'
 *   url: 请求地址，必填
 *   data: 请求数据（GET 时拼接在 URL，POST 时放入 body）
 *   headers: 请求头对象（例如 {'Content-Type': 'application/json'}）
 *   success: 成功回调函数（status 2xx）
 *   error: 失败回调函数（网络错误或 status 非 2xx）
 */
function myAjax(options) {
    // 参数校验
    if (!options.url) {
      throw new Error('URL 参数缺失');
    }
  
    // 兼容性处理：创建 XHR 对象
    var xhr = window.XMLHttpRequest 
      ? new XMLHttpRequest() 
      : new ActiveXObject('Microsoft.XMLHTTP');
  
    // 处理请求方法（默认 GET）
    var method = (options.method || 'GET').toUpperCase();
  
    // GET 请求：将数据拼接到 URL
    var url = options.url;
    if (method === 'GET' && options.data) {
      var query = new URLSearchParams(options.data).toString();
      url += (url.includes('?') ? '&' : '?') + query;
    }
  
    // 初始化请求
    xhr.open(method, url, true); // 异步模式
  
    // 设置请求头
    if (options.headers) {
      for (var key in options.headers) {
        if (Object.hasOwnProperty.call(options.headers, key)) {
          xhr.setRequestHeader(key, options.headers[key]);
        }
      }
    }
  
    // 处理 POST 数据
    var postData = null;
    if (method === 'POST' && options.data) {
      if (options.headers && options.headers['Content-Type'] === 'application/json') {
        postData = JSON.stringify(options.data);
      } else { // 默认表单格式
        postData = new URLSearchParams(options.data).toString();
      }
    }
  
    // 监听状态变化
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) { // 请求完成
        if (xhr.status >= 200 && xhr.status < 300) { // 2xx 状态码
          options.success && options.success(parseResponse(xhr));
        } else if (xhr.status) { // 服务器返回错误
          options.error && options.error({
            type: 'HTTP_ERROR',
            status: xhr.status,
            response: xhr.responseText
          });
        }
      }
    };
  
    // 网络错误处理
    xhr.onerror = function() {
      options.error && options.error({
        type: 'NETWORK_ERROR',
        message: '网络请求失败'
      });
    };
  
    // 发送请求
    xhr.send(postData);
  
    /**
     * 解析响应数据
     */
    function parseResponse(xhr) {
      var contentType = xhr.getResponseHeader('Content-Type') || '';
      if (contentType.includes('application/json')) {
        try {
          return JSON.parse(xhr.responseText);
        } catch (e) {
          console.error('JSON 解析失败:', e);
          return xhr.responseText;
        }
      }
      return xhr.responseText;
    }
  }