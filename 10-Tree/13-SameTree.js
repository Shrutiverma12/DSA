/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function f(p, q) {
  if (p == null || q == null) return p == q;
  let left = f(p.left, q.left);
  let right = f(p.right, q.right);
  return p.val == q.val && left && right;
}
var isSameTree = function (p, q) {
  return f(p, q);
};
 