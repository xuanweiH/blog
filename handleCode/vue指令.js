// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
    inserted: function (el) {
    el.focus();
    }
    });

    <input v-focus />

// 下拉菜单指令
    Vue.directive('dropdown', {
        bind(el, binding, vnode) {
        el.addEventListener('click', function (e) {
        e.stopPropagation();
        // 切换下拉菜单的显示状态
        el.querySelector('.dropdown-content').classList.toggle('show');
        });
        }
        });
        
<div v-dropdown>
<button>菜单</button>
<div class="dropdown-content">
<a href="#">链接 1</a>
<a href="#">链接 2</a>
<a href="#">链接 3</a>
</div>
</div>

// 时间格式化指令

Vue.directive('relative-time', {
    bind(el, binding) {
    const date = new Date(binding.value);
    const now = new Date();
    const diff = now - date;
    // 根据时间差转换成相对时间字符串
    el.textContent = formatRelativeTime(diff);
    }
    });
    
    function formatRelativeTime(diff) {
    // ...实现相对时间格式化的逻辑
    }

    <span v-relative-time="someDate"></span>

    

// 滚动触发动画指令
    Vue.directive('scroll-animate', {
        bind(el, binding) {
        const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
        };
        const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
        el.classList.add('animate');
        observer.unobserve(el);
        }
        });
        }, options);
        observer.observe(el);
        }
        });
        

// 懒加载 
Vue.directive('lazy', {
bind(el, binding) {
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    const img = new Image();
    img.src = binding.value;
    img.onload = () => {
    el.src = binding.value;
    observer.unobserve(el);
    };
    };
    });
    }, {
    rootMargin: '0px',
    threshold: 0.1
    });
    observer.observe(el);
    }
    });

<img v-lazy="imageUrl" />


// 自定义第三方
Vue.directive('my-plugin', {
    bind(el, binding, vnode) {
    // 初始化第三方插件
    myPlugin.init(el, binding.value);
    },
    update(el, binding, vnode) {
    // 当绑定值更新时，更新插件
    myPlugin.update(el, binding.value);
    },
    unbind(el, binding, vnode) {
    // 销毁插件实例
    myPlugin.destroy(el);
    }
    });
    
<div v-my-plugin="pluginOptions"></div>
