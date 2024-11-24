/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head == null) return null;
  let temp = head;
  while (temp) {
    let cur = temp.next;
    temp.next = new Node(temp.val);
    temp.next.next = cur;
    temp = cur;
  }
  temp = head;
  while (temp) {
    if (temp.random != null) {
      temp.next.random = temp.random.next;
    }
    temp = temp.next.next;
  }
  //seperating
  let curHead = head;
  let newHead = head.next;
  let t1 = curHead;
  let t2 = newHead;
  while (t1) {
    t1.next = t2.next;
    t1 = t1.next;
    if (t1 != null) {
      t2.next = t1.next;
      t2 = t2.next;
    }
  }
  return newHead;
};
