// 运用你所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和写入数据 put 。

// 获取数据 get(key) - 如果密钥 ( key ) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1 。
// 写入数据 put(key, value) - 如果密钥不存在，则写入数据。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。

// 进阶:

// 你是否可以在 O(1) 时间复杂度内完成这两种操作？

// 示例:
// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4

// 思路:
// 可以通过map结构来实现
// 核心是通过map 的get set方法
// 每次cache调用get时, 先拿到map.get的值 然后再删掉这个重新map.set 保证key的实时顺序是最新
// 然后 put的时候 如果已经有了的话就先delete再set 更新key的时序 
// 如果超出容量就利用cache.keys().next().value可以拿到 第一个key 也可以理解为链表的头部
class LRUCache {
    constructor(size) {
        this.size = size
        this.cache = new Map()
    }
    get (key) {
      if(this.cache.has(key)){
        let temp = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, temp)
        return temp
      } 
      return -1
    }
    put(key, value) {
      if (this.cache.has(key)) {
          this.cache.delete(key)
      } else if (this.cache.size>=this.size) {
          this.cache.delete(this.cache.keys().next().value)
      }
      this.cache.set(key, value)
    }
}