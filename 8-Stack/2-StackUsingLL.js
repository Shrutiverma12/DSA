var Node = function (data) {
  this.data = data;
  this.next = null;
};
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  else {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp.data;
  }
};

MyLinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val);
  if (this.head == null) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  this.size++;
};

MyLinkedList.prototype.deleteAtHead = function () {
  if (this.head == null) return;
  let nextHead = this.head.next;
  let nodeToBeDeleted = this.head;
  this.head = nextHead;
  nodeToBeDeleted.next = null;
  this.size--;
};

class Stack {
  #ll;
  constructor() {
    this.#ll = new MyLinkedList();
  }
  push(ele) {
    this.#ll.addAtHead(ele);
  }
  pop() {
    this.#ll.deleteAtHead();
  }
  top() {
    return this.#ll.head.data;
  }
  isEmpty() {
    return this.#ll.head == null;
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.top());
s.pop(); // removes 30
console.log(s.top());
s.pop();
console.log(s.top());
