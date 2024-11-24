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
 * @return {number}
 */
let d;
function f(root) {
  if (root == null) return 0;
  let ld = f(root.left);
  let rd = f(root.right);
  d = Math.max(d, rd + ld);
  return Math.max(ld, rd) + 1;
}
var diameterOfBinaryTree = function (root) {
  d = 0;
  f(root);
  return d;
};
