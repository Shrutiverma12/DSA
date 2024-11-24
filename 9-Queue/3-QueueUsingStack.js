var MyQueue = function () {
  this.pst = [];
  this.sst = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pst.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.pst.length != 0) {
    this.sst.push(this.pst.pop());
  }
  let x = this.sst.pop();
  while (this.sst.length != 0) {
    this.pst.push(this.sst.pop());
  }
  return x;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.pst.length != 0) {
    this.sst.push(this.pst.pop());
  }
  let x = this.sst.pop();
  this.sst.push(x);
  while (this.sst.length != 0) {
    this.pst.push(this.sst.pop());
  }
  return x;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.pst.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
