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
let mpTrue;
let mpFalse;

function f(root, isPR) {
  if (root == null) return 0;

  if (isPR && mpTrue.get(root)) {
    return mpTrue.get(root);
  }
  if (!isPR && mpFalse.get(root)) {
    return mpFalse.get(root);
  }

  if (!isPR) {
    const leave = f(root.left, false) + f(root.right, false);
    const take = root.val + f(root.left, true) + f(root.right, true);

    const ans = Math.max(leave, take);
    mpFalse.set(root, ans);
    return ans;
  } else {
    const leave = f(root.left, false) + f(root.right, false);
    const ans = leave;
    mpTrue.set(root, ans);
    return ans;
  }
}
var rob = function (root) {
  mpTrue = new Map();
  mpFalse = new Map();
  return f(root, false);
};
