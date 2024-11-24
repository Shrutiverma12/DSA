/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  removeAtHead() {
    if (this.head == null) return;
    const newHead = this.head.next;
    this.head.next = null;
    this.head = newHead;
    if (this.head == null) {
      this.tail = null;
    }
  }
  addAtTail(data) {
    if (this.head == null) {
      const newHead = new Node(data);
      this.head = newHead;
      this.tail = newHead;
    } else {
      const newHead = new Node(data);
      this.tail.next = newHead;
      this.tail = newHead;
    }
  }
  getHead() {
    if (this.head == null) return undefined;
    return this.head.data;
  }
  getTail() {
    if (this.tail == null) return undefined;
    return this.tail.data;
  }
  isEmpty() {
    return this.head == null;
  }
}
class CusQueue {
  constructor() {
    this.ll = new LinkedList();
  }
  enqueue(data) {
    this.ll.addAtTail(data);
  }
  dequeue() {
    this.ll.removeAtHead();
  }
  front() {
    return this.ll.getHead();
  }
  back() {
    return this.ll.getTail();
  }
  isEmpty() {
    return this.ll.isEmpty();
  }
}
var levelOrder = function (root) {
  if (root == null) return [];
  const qu = new CusQueue();
  qu.enqueue(root);
  qu.enqueue(null);
  let res = [];
  let lev = new Array();
  while (!qu.isEmpty()) {
    const cur = qu.front();
    qu.dequeue();
    if (cur == null) {
      if (!qu.isEmpty()) {
        res.push(lev);
        qu.enqueue(null);

        lev = new Array();
      } else {
        res.push(lev);
      }
    } else {
      lev.push(cur.val);
      if (cur.left) qu.enqueue(cur.left);
      if (cur.right) qu.enqueue(cur.right);
    }
  }
  return res;
};

/**
 * /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//     if(!root){
//         return []
//     }
//     let qu = []
//     let res = []
//     qu.push(root)
//     while(qu.length){ 
//         let temp = []
//         let size = qu.length
//         for(let i = 0; i<size; i++){
//           let node = qu.shift()
//           temp.push(node.val)
//             if(node.left){
//                 qu.push(node.left)
//             }
//             if(node.right){
//                 qu.push(node.right)
//             }
//         }
//         res.push(temp)
//     }
//     return res
// };