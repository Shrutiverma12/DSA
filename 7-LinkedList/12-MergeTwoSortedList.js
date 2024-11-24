/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let newHead = new ListNode(-1);
  let t1 = list1;
  let t2 = list2;
  let temp = newHead;
  while (t1 && t2) {
    if (t1.val < t2.val) {
      temp.next = t1;
      t1 = t1.next;
      temp = temp.next;
      temp.next = null;
    } else {
      temp.next = t2;
      t2 = t2.next;
      temp = temp.next;
      temp.next = null;
    }
  }
  if (t2 != null) {
    temp.next = t2;
  }
  if (t1 != null) {
    temp.next = t1;
  }
  return newHead.next;
};
