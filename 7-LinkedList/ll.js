var Node = function (data) {
  this.data = data;
  this.next = null;
};
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
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

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val);
  // if(this.head == null){
  //     this.head = node
  // }else{
  node.next = this.head;
  this.head = node;
  // }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new Node(val);
  if (this.head == null) {
    this.head = node;
  } else {
    let i = this.head;
    while (i.next != null) {
      i = i.next;
    }
    i.next = node;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index == 0) return this.addAtHead(val);
  else {
    let temp = this.head;
    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }
    let node = new Node(val);
    node.next = temp.next;
    temp.next = node;
  }
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  //console.log(index)
  if (index == 0) {
    this.head = this.head.next;
  } else {
    let temp = this.head;
    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
