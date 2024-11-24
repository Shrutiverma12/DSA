class Stack {
  //private property
  #arr;

  constructor() {
    this.#arr = [];
  }

  push(element) {
    this.#arr.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.#arr.pop();
  }
  top() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.#arr[this.#arr.length - 1];
  }
  isEmpty() {
    return this.#arr.length == 0;
  }
}

let s = new Stack();
let t = s.top();

s.push(10);
s.push(20);
s.push(30);
s.push(40);
console.log(s.top());
s.pop();
console.log(s.top());
let popItem = s.pop();
console.log(popItem);
