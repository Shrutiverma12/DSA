/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  let cur = root.val;
  if (cur > p.val && cur > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (cur < p.val && cur < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};
