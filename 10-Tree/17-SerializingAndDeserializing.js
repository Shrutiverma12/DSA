/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root == null) return "";
  let q = [];
  let str = "";
  q.push(root);
  while (q.length) {
    let node = q.shift();
    if (node == null) {
      str = str + "n ";
      continue;
    }
    str = str + node.val + " ";
    q.push(node.left);
    q.push(node.right);
  }
  return str.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data == "") return null;
  let q = [];
  let val = data.split(" ");
  let root = new TreeNode(Number.parseInt(val[0]));
  q.push(root);
  let i = 1;
  while (i < val.length && q.length > 0) {
    let cur = q.shift();
    if (val[i] != "n") {
      let left = new TreeNode(Number.parseInt(val[i]));
      cur.left = left;
      q.push(left);
    }
    i++;
    if (i < val.length && val[i] != "n") {
      let right = new TreeNode(Number.parseInt(val[i]));
      cur.right = right;
      q.push(right);
    }
    i++;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
