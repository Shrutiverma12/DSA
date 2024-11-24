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
      this.addAtHead();
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
    } else if (this.head.next == null) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head.next;
      this.head.next = null;
      newHead.pre = null;
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
      newTail.next = null;
      this.tail.pre = null;
      this.tail = newTail;
    }
  }
  display() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
    console.log("*****");
    temp = this.tail;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.pre;
    }
  }
}

class Deque {
  constructor() {
    this.dll = new LinkedList();
  }
  addAtFront(data) {
    this.dll.addAtHead(data);
  }
  addAtBack(data) {
    this.dll.addAtTail(data);
  }
  removeAtBack() {
    this.dll.removeAtTail();
  }
  removeAtFront() {
    this.dll.removeAtHead();
  }
  getBack() {
    if (this.dll.tail) {
      return this.dll.tail.data;
    }
  }
  getFront() {
    if (this.dll.head) {
      return this.dll.head.data;
    }
  }
  displayDeque() {
    this.dll.display();
  }
}
const dq = new Deque();
dq.addAtFront(10);
dq.addAtFront(20);
dq.addAtFront(30);

dq.addAtBack(2);
dq.addAtBack(3);
dq.addAtBack(4);
dq.displayDeque();
