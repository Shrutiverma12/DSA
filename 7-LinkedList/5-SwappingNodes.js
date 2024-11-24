/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let fast = head;
  let i = 1;
  while (i < k) {
    fast = fast.next;
    i++;
  }
  let fn = fast;
  let slow = head;
  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }
  let ln = slow;

  let temp = fn.val;
  fn.val = ln.val;
  ln.val = temp;

  return head;
};
