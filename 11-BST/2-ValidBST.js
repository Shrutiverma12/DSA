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
function f(root, min, max) {
  if (!root) return true;
  if (root.val >= max || root.val <= min) return false;
  return f(root.left, min, root.val) && f(root.right, root.val, max);
}
var isValidBST = function (root) {
  return f(root, (min = -Infinity), (max = Infinity));
};
