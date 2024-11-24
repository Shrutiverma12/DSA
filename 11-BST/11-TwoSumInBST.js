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
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function (root, k) {
  let res = [];
  function Inorder(root) {
    if (root === null) {
      return null;
    }
    Inorder(root.left);
    res.push(root.val);
    Inorder(root.right);
  }
  Inorder(root);
  let i = 0;
  let j = res.length - 1;
  while (i < j) {
    if (res[i] + res[j] == k) return true;
    else if (res[i] + res[j] < k) i++;
    else j--;
  }
  return false;
};
