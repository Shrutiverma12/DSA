/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let t1 = headA;
  let t2 = headB;
  let LenA = 0;
  while (t1) {
    t1 = t1.next;
    LenA += 1;
  }

  let LenB = 0;
  while (t2) {
    t2 = t2.next;
    LenB += 1;
  }

  t1 = headA;
  t2 = headB;

  if (LenA > LenB) {
    let steps = LenA - LenB;
    for (let i = 0; i < steps; i++) {
      t1 = t1.next;
    }
  } else {
    let steps = LenB - LenA;
    for (let i = 0; i < steps; i++) {
      t2 = t2.next;
    }
  }
  while (t1 != t2) {
    t1 = t1.next;
    t2 = t2.next;
  }
  return t1;
};
