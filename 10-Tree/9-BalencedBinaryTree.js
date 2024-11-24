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
 * @return {boolean}
 */
let ans;
function f(root) {
  if (root == null) return 0;
  let left = f(root.left);
  let right = f(root.right);
  ans = ans && Math.abs(left - right) <= 1;
  return 1 + Math.max(left, right);
}
var isBalanced = function (root) {
  ans = true;
  f(root);
  return ans;
};
