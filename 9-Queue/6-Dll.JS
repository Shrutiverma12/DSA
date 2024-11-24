class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.pre = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  isEmpty() {
    return this.head == null;
  }
  addAtHead(data) {
    if (this.isEmpty()) {
      const node = new Node(data);
      this.head = node;
      this.tail = node;
    } else {
      const node = new Node(data);
      node.next = this.head;
      this.head.pre = node;
      this.head = node;
    }
  }
  addAtTail(data) {
    if (this.isEmpty()) {
      const node = new Node(data);
      this.head = node;
      this.tail = node;
    } else {
      const node = new Node(data);
      this.tail.next = node;
      node.pre = this.tail;
      this.tail = node;
    }
  }
  removeAtHead() {
    if (this.isEmpty()) {
      return;
    } else if (this.head.null == null) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head.next;
      this.head.pre = null;
      this.head.next = null;
      this.head = newHead;
    }
  }
  removeAtTail() {
    if (this.isEmpty()) {
      return;
    } else if (this.head.next == null) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = this.tail.pre;
      this.tail.pre = newTail;
      this.tail = newTail;
    }
  }
  removeNode(node) {
    if (node.pre == null) {
      this.removeAtHead();
    } else if (node.next == null) {
      this.removeAtTail();
    } else {
      const preNode = node.pre;
      const nextNode = node.next;
      preNode.next = null;
      node.pre = null;
      nextNode.pre = null;
      node.next = null;
      preNode.next = nextNode;
      nextNode.pre = preNode;
    }
  }
  display() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
    temp = this.tail;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.pre;
    }
  }
}
const dll = new LinkedList();
dll.addAtHead(10);
dll.addAtHead(20);
dll.addAtHead(30);
dll.addAtHead(40);
console.log("*****");
dll.display();
dll.addAtTail(2);
dll.addAtTail(4);
dll.addAtTail(6);
dll.addAtTail(8);
