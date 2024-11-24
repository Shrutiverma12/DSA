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
function preOrder(root) {
  if (root == null) {
    return null;
  }
  //process the root
  result.push(root.val);
  //process the left sub tree
  preOrder(root.left);
  //process the right sub tree
  preOrder(root.right);
}
var preorderTraversal = function (root) {
  result = [];
  preOrder(root);
  return result;
};
