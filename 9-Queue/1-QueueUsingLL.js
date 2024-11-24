class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  removeAtHead() {
    if (this.head == null) return;
    const newHead = this.head.next;
    this.head.next = null;
    this.head = newHead;
    if (this.head == null) {
      this.tail = null;
    }
  }
  addAtTail(data) {
    if (this.head == null) {
      const newHead = new Node(data);
      this.head = newHead;
      this.tail = newHead;
    } else {
      const newHead = new Node(data);
      this.tail.next = newHead;
      this.tail = newHead;
    }
  }
  getHead() {
    if (this.head == null) return undefined;
    return this.head.data;
  }
  getTail() {
    if (this.tail == null) return undefined;
    return this.tail.data;
  }
}
class Queue {
  constructor() {
    this.ll = new LinkedList();
  }
  enqueue(data) {
    this.ll.addAtTail(data);
  }
  dequeue() {
    this.ll.removeAtHead();
  }
  front() {
    return this.ll.getHead();
  }
  back() {
    return this.ll.getTail();
  }
}

let qu = new Queue();
qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
console.log(qu.front(), qu.back());
qu.dequeue();
console.log(qu.front(), qu.back());
