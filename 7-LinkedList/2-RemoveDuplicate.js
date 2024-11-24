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
var deleteDuplicates = function (head) {
  let temp = head;
  while (temp != null && temp.next != null) {
    if (temp.val == temp.next.val) {
      let toBeRemoved = temp.next;
      temp.next = toBeRemoved.next;
      toBeRemoved.next = null;
    } else {
      temp = temp.next;
    }
  }
  return head;
};
