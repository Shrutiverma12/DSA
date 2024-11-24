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
 * @param {number} key
 * @return {TreeNode}
 */
function f(root, value) {
  if (root == null) return null;
  if (root.val == value) {
    if (!root.left && !root.right) {
      return null;
    } else if (!root.left && root.right) {
      return root.right;
    } else if (!root.right && root.left) {
      return root.left;
    } else {
      let temp = root.right;
      while (temp.left) {
        temp = temp.left;
      }
      temp.left = root.left;
      return root.right;
    }
  }
  if (root.val < value) {
    root.right = f(root.right, value);
  }
  if (root.val > value) {
    root.left = f(root.left, value);
  }
  return root;
}
var deleteNode = function (root, key) {
  return f(root, key);
};
