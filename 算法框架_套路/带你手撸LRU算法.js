/* 
146.LRU缓存机制

> LRU 缓存算法的核心数据结构就是哈希链表，双向链表和哈希表的结合体。
*/
//  Least Recently Used
// ! 先实现双向链表
class ListNode {
  constructor(key, value) {
    this.key = key     
    this.value = value
    this.next = null
    this.prev = null
  }
}


class LRUCache {
  constructor(capacity) {    // 容量由用户设置
    this.capacity = capacity // 缓存的容量
    this.hashTable = {}      // 哈希表
    this.count = 0           // 缓存数目
    this.dummyHead = new ListNode() // 虚拟头结点
    this.dummyTail = new ListNode() // 虚拟尾节点
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead // 相联系
  }

  //! 要求 O(1)
  get(key) {
    let node = this.hashTable[key] // 从哈希表中获取对应的节点
    if (node == null) return -1    // 如果节点不存在，返回-1
    this.moveToHead(node)          // 因为被读取了，该节点移动到链表头部
    return node.value              // 返回出节点值
  }
  
  //! 要求 O(1)
  put(key, value) {
    let node = this.hashTable[key]     // 获取链表中的node
    if (node == null) {                // 如果不存在于链表
      let newNode = new ListNode(key, value) // 为键值对创建新的节点
      this.hashTable[key] = newNode    // 存入哈希表
      this.addToHead(newNode)          // 将节点添加到链表头部
      this.count++                     // 缓存数目+1
      if (this.count > this.capacity) {// 超出缓存容量
        this.removeLRUItem()           // 删除最远一次使用的数据
      }
    } else {                // 如果已经存在于链表
      node.value = value    // 更新value
      this.moveToHead(node) // 将节点移到链表头部
    }
  }

  addToHead(node) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }

  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node)
  }
  
  removeFromList(node) {
    let tempForPrev = node.prev
    let tempForNext = node.next
    tempForPrev.next = tempForNext
    tempForNext.prev = tempForPrev
  }

  removeLRUItem() {                 // 删除“老家伙”
    let tail = this.popTail()       // 将它从链表尾部删除
    delete this.hashTable[tail.key] // 哈希表中也将它删除
    this.count--                    // 缓存数目-1
  }

  popTail() {                          // 删除链表尾节点
    let tailItem = this.dummyTail.prev // 通过虚拟尾节点找到它
    this.removeFromList(tailItem)      // 删除该真实尾节点
    return tailItem                    // 返回被删除的节点
  }
  
}
