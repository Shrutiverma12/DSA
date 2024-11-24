/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let n1 = new ListNode(-1);
  let n2 = new ListNode(-1);
  let t1 = n1;
  let t2 = n2;
  let cur = head;
  while (cur != null) {
    let temp = cur;
    cur = cur.next;
    temp.next = null;
    if (temp.val < x) {
      t1.next = temp;
      t1 = t1.next;
    } else {
      t2.next = temp;
      t2 = t2.next;
    }
  }
  t1.next = n2.next;
  n2.next = null;
  let result = n1.next;
  n1.next = null;
  return result;
};
