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
//TC- O((logn)^2)
//SC- O(logn)

var countNodes = function (root) {
  if (root == null) return 0;
  let lh = findHeightLeft(root);
  let rh = findHeightRight(root);
  if (lh == rh) return 2 ** lh - 1;
  return 1 + countNodes(root.left) + countNodes(root.right);

  function findHeightLeft(node) {
    let h = 0;
    while (node) {
      h++;
      node = node.left;
    }
    return h;
  }
  function findHeightRight(node) {
    let h = 0;
    while (node) {
      h++;
      node = node.right;
    }
    return h;
  }
};
