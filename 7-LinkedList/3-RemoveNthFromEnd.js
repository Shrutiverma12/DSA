/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let i = 0;
  let fast = head;
  while (i < n && fast != null) {
    fast = fast.next;
    i++;
  }
  if (fast == null) {
    //remove head
    let newHead = head.next;
    head.next = null;
    return newHead;
  }
  let slow = head;
  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }
  let toBeDeleted = slow.next;
  slow.next = toBeDeleted.next;
  toBeDeleted.next = null;
  return head;
};
