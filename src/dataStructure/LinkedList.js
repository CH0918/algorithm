class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// 实现链表
export class LinkedList {
  constructor() {
    this.head = new Node('head');
    this.size = 0;
  }
  /**
   * 查询目标值查询节点
   * @param {*} value 目标值
   * @returns 目标节点
   */
  findByValue(value) {
    let currentNode = this.head.next;
    // 一直往下查找，直到是最后一个或者找到了目标元素就停止
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }

  /**
   * 根据索引查找元素
   * @param {*} index 索引
   * @returns
   */
  findByIndex(index) {
    //
    if (index < 0 || index > this.size) {
      return -1;
    }
    // 头部元素
    let currentNode = this.head;
    // index == 0 -> 第一项
    // index == 1 -> 第二项

    let i = 0;
    while (currentNode.next !== null) {
      i++;
      currentNode = currentNode.next;
      if (index + 1 === i) {
        break;
      }
    }
    return currentNode;
  }

  findPrev(value) {
    let currentNode = this.head;
    // 后面还有值 && 当前节点不是要找的节点，继续往下走
    while (currentNode.next !== null && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    // 检测一下
    return currentNode.next === null ? -1 : currentNode;
  }

  /**
   * 在链表结尾插入新元素
   * @param {*} newValue 新节点值
   */
  append(newValue) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(newValue);
    this.size += 1;
  }

  /**
   * 指定一个元素插入一个新元素
   * @param {*} newValue
   * @param {*} targetValue
   */
  insertAfter(newValue, targetValue) {
    let findNode = this.findByValue(targetValue);
    if (findNode === -1) return;
    let node = new Node(newValue);
    // 先把目标节点后面节点拿出来
    let tempNode = findNode.next;
    // 插进来的节点下一个节点指向tempNode
    node.next = tempNode;
    // 目标节点下一个节点就是要插进来的节点
    findNode.next = node;
    this.size++;
  }

  remove(value) {
    let removeNode = this.findByValue(value);
    if (removeNode === -1) return;
    let prevNode = this.findPrev(value);
    // 要移除节点后面节点
    let tempNode = removeNode.next;
    // 要目标节点前节点指向目标节点后节点
    prevNode.next = tempNode;
    // 切断目标节点跟后一个节点的联系
    removeNode.next = null;
    this.size--;
  }
}
