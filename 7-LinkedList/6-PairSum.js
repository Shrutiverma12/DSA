/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let fast = head;
  let slow = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let pre = null;
  let after = null;
  while (slow) {
    after = slow.next;
    slow.next = pre;
    pre = slow;
    slow = after;
  }
  let ans = 0;
  while (pre != null) {
    let sum = head.val + pre.val;
    ans = Math.max(ans, sum);
    pre = pre.next;
    head = head.next;
  }
  return ans;
};
