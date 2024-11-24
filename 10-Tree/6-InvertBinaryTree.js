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
 * @return {TreeNode}
 */
function f(root) {
  if (root == null) return null;
  //Go and invert left sub tree
  f(root.left);
  //Go and invert right sub tree
  f(root.right);

  //Go and invert whole tree
  let node = root.left;
  root.left = root.right;
  root.right = node;
}
var invertTree = function (root) {
  f(root);
  return root;
};
