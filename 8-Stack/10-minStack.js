var MinStack = function () {
  this.st = [];
  this.min = -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.st.length == 0) {
    this.st.push(val);
    this.min = val;
  } else if (this.min < val) {
    this.st.push(val);
  } else {
    this.st.push(2 * val - this.min);
    this.min = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.st.length == 0) return;
  else if (this.st[this.st.length - 1] > this.min) {
    this.st.pop();
  } else {
    this.min = 2 * this.min - this.st[this.st.length - 1];
    this.st.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.st.length == 0) return;
  else if (this.st[this.st.length - 1] > this.min)
    return this.st[this.st.length - 1];
  else return this.min;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
