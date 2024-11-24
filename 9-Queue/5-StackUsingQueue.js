var MyStack = function () {
  this.pq = [];
  this.sq = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  while (this.pq.length != 0) {
    this.sq.push(this.pq.shift());
  }
  this.pq.push(x);
  while (this.sq.length != 0) {
    this.pq.push(this.sq.shift());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.pq.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.pq[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.pq.length == 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
