/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  let dummy = new ListNode(-2);
  let pre = dummy;
  let cur = head;
  let nxt = null;
  while (cur) {
    nxt = cur.next;
    while (pre.next && pre.next.val < cur.val) {
      pre = pre.next;
    }
    cur.next = pre.next;
    pre.next = cur;
    pre = dummy;
    cur = nxt;
  }
  return dummy.next;
};
