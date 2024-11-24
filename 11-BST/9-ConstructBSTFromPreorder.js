/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let i = 0;
  function f(upperBound) {
    if (i == preorder.length || preorder[i] >= upperBound) return null;
    let root = new TreeNode(preorder[i]);
    i++;
    root.left = f(root.val);
    root.right = f(upperBound);
    return root;
  }
  return f(Number.MAX_VALUE);
};
