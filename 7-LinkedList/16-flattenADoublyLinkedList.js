/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let temp = head;
  while (temp) {
    let t = temp.next;
    if (temp.child) {
      let c = flatten(temp.child);
      temp.next = c;
      c.prev = temp;
      while (c.next) {
        c = c.next;
      }
      c.next = t;
      if (t) t.prev = c;
    }
    temp.child = null;
    temp = t;
  }
  return head;
};
``;
