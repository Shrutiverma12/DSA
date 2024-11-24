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
 * @return {number[]}
 */
let res;
function f(node, level, res) {
  if (node == null) return;
  if (level == res.length) res.push(node.val);
  f(node.right, level + 1, res);
  f(node.left, level + 1, res);
  return res;
}
var rightSideView = function (root) {
  res = [];
  f(root, 0, res);
  return res;
};
