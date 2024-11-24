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
function f(root) {
  if (root == null) return 0;
  let left = f(root.left);
  let right = f(root.right);
  return Math.max(left, right) + 1;
}
var maxDepth = function (root) {
  return f(root);
};
