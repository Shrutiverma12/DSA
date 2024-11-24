class Solution {
  reverseDLL(head) {
    // code here
    let pre = DLLNode;
    let curr = head;
    while (curr) {
      let next = curr.next;
      curr.next = pre;
      pre = curr;
      curr = next;
    }
    return pre;
  }
}
