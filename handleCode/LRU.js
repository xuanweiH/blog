import { REQUEST_STATUS } from '../../helper/constants';
// LRU 标准写法是「双向链表 + Map」，
// 但是前端的数据量不大，就十几条几十条数据，O(1) 和 O(n) 差距不大
// 这里用 Array 替代双向链表也没啥问题
class LRU {
    constructor(capacity) {
        // LRU 容量
        this.capacity = capacity;
        // 数组为 url 容器
        this.urls = [];
        // key 为 url，value 为 response
        this.caches = new Map();
    }
    get(url) {
        const index = this.urls.indexOf(url);
        if (index > -1) {
            this._makeRecently(index, url);
            return this.caches.get(url);
        } else {
            return null;
        }
    }
    put(url, cache) {
        const index = this.urls.indexOf(url);
        if (index > -1) {
            this._makeRecently(index, url);
            this.caches.set(url, cache);
        } else {
            if (this.caches.size >= this.capacity) {
                this._removeLeastRecently();
            }
            this._addRecently(url, cache);
        }
    }
    // 将某个 url 提升为最近使用的
    _makeRecently(index, url) {
        this._remove(index);
        this.urls.push(url);
    }
    // 添加最近使用的元素
    _addRecently(url, cache) {
        this.caches.set(url, cache);
        this.urls.push(url);
    }
    // 删除最久未使用的元素
    _removeLeastRecently() {
        const oldest = this.urls[0];
        this._remove(0);
        this.caches.delete(oldest);
    }
    // 移除 urls 中 index 位置的元素
    _remove(index) {
        return this.urls.splice(index, 1);
    }
}
const LRUCahe = new LRU(10);
export const LRUCacheReq = options => {
    if (LRUCahe.get(options.url)) {
        options.status = REQUEST_STATUS.CACHE;
        options.response = LRUCahe.get(options.url);
    }
    return options;
};
export const LRUCacheRes = result => {
    LRUCahe.put(result.options.url, result.response);
    return result;
};