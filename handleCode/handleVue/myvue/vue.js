

export default class Vue {
    constructor(options = {}) {
        this.$options = options
        this.$data = options.data;
        this.$methods = options.methods;
        this.initRootElement(options)

        this._proxyData(this.$data)
    }
    // 获取根元素, 并且存储到vue实力, 简单检查传入的el是否合理

    initRootElement(options) {
       if(typeof options.el === 'string') {
           this.$el = document.querySelector(options.el)
       } else if(options.el instanceof HTMLElement) {
           this.$el = options.el
       }

       if(!this.$el) {
           throw new Error('传入错误')
       }
     }

     _proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return data[key]
                },
                set(newVal) {
                  if(data[key] === newVal) {
                      return;
                  }
                  data[key] = newVal;
                }
            })
        })
     }
}