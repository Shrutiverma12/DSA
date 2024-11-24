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
let result;
function inOrder(root) {
  if (root == null) return null;
  inOrder(root.left);
  result.push(root.val);
  inOrder(root.right);
}
var inorderTraversal = function (root) {
  result = [];
  inOrder(root);
  return result;
};
