/**
 * @param {string} homepage
 */

var Node = function (data) {
  this.data = data;
  this.next = null;
  this.pre = null;
  this.cur = null;
};
var BrowserHistory = function (homepage) {
  this.cur = new Node(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  let newPage = new Node(url);
  this.cur.next = newPage;
  newPage.pre = this.cur;
  this.cur = newPage;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let i = 0;
  while (i < steps) {
    if (!this.cur.pre) break;
    this.cur = this.cur.pre;
    i++;
  }
  return this.cur.data;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let i = 0;
  while (i < steps) {
    if (!this.cur.next) break;
    this.cur = this.cur.next;
    i++;
  }
  return this.cur.data;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
