class Solution {
  //Function to reverse a string.
  insertAtBottom(st, x) {
    if (st.length === 0) {
      st.push(x);
    } else {
      let a = st.pop();
      this.insertAtBottom(st, x);
      st.push(a);
    }
  }
  reverse(st) {
    //your code here
    if (st.length > 0) {
      let x = st.pop();
      this.reverse(st);
      this.insertAtBottom(st, x);
    }
  }
}
