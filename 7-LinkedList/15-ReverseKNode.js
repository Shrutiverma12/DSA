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
var reverseKGroup = function (head, k) {
  // if k nodes are not left
  let j = 0;
  let temp = head;
  while (temp && j < k) {
    temp = temp.next;
    j++;
  }
  if (j < k) return head;

  let cur = head;
  let pre = null;
  let after = null;
  let i = 0;
  while (cur && i < k) {
    after = cur.next;
    cur.next = pre;
    pre = cur;
    cur = after;
    i++;
  }
  if (after != null) {
    head.next = reverseKGroup(after, k);
  }
  return pre;
};
