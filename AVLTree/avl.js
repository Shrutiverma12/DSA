class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
class AVL {
  constructor() {
    this.root = null;
  }

  rightRotate(alpha) {
    let beta = alpha.left;
    let sigma = beta.right;
    beta.right = alpha;
    alpha.left = sigma;

    //update alpha height first because beta dependes
    alpha.height =
      Math.max(this.height(alpha.left), this.height(alpha.right)) + 1;
    beta.height = Math.max(this.height(beta.left), this.height(beta.right)) + 1;
    return beta;
  }

  leftRotate(alpha) {
    let beta = alpha.right;
    let sigma = beta.left;
    beta.left = alpha;
    alpha.right = sigma;

    //update alpha height first because beta dependes
    alpha.height =
      Math.max(this.height(alpha.left), this.height(alpha.right)) + 1;
    beta.height = Math.max(this.height(beta.left), this.height(beta.right)) + 1;

    return beta;
  }

  height(node) {
    if (node == null) return 0;
    return node.height;
  }

  getBF(node) {
    if (node == null) {
      return 0;
    } else {
      return this.height(node.left) - this.height(node.right);
    }
  }

  insert(alpha, data) {
    if (alpha == null) return new Node(data);
    //Decide wheter to insert
    if (alpha.data > data) {
      //go left
      alpha.left = this.insert(alpha.left, data);
    } else if (alpha.data < data) {
      //go right
      alpha.right = this.insert(alpha.right, data);
    } else {
      return alpha;
    }

    //Update Height
    alpha.height =
      Math.max(this.height(alpha.left), this.height(alpha.right)) + 1;

    //this part will be executing while comming back
    //Start Balancing
    let bf = this.getBF(alpha);

    //alpha have to balanced
    if (bf > 1) {
      //tree is left heavy
      //what to do right or leftRight rotation
      let beta = alpha.left;
      if (data < beta.data) {
        //right rotation
        return this.rightRotate(alpha);
      } else {
        //left right rotation
        alpha.left = this.leftRotate(alpha.left);
        return this.rightRotate(alpha);
      }
    } else if (bf < -1) {
      //tree is right heavy
      //what to do left or rightLeft rotation
      let beta = alpha.right;
      if (data > beta.data) {
        return this.leftRotate(alpha);
      } else {
        alpha.right = this.rightRotate(alpha.right);
        return this.leftRotate(alpha);
      }
    }

    return alpha; //bf is already 1,-1,0
  }

  insertInAVL(data) {
    this.root = this.insert(this.root, data);
  }

  preOrder(root, result) {
    if (root == null) {
      return null;
    }
    //process the root
    result.push(root.data);
    //process the left sub tree
    this.preOrder(root.left, result);
    //process the right sub tree
    this.preOrder(root.right, result);
  }
  preorderTraversal() {
    let result = [];
    this.preOrder(this.root, result);
    return result;
  }

  postOrder(root, result) {
    if (root == null) return null;
    this.postOrder(root.left, result);
    this.postOrder(root.right, result);
    result.push(root.data);
  }

  postorderTraversal() {
    let result = [];
    this.postOrder(this.root, result);
    return result;
  }

  inOrder(root, result) {
    if (root == null) return null;
    this.inOrder(root.left, result);
    result.push(root.data);
    this.inOrder(root.right, result);
  }
  inorderTraversal() {
    let result = [];
    this.inOrder(this.root, result);
    return result;
  }
  levelOrderTraversal() {
    return this.levelOrder(this.root);
  }
  levelOrder(root) {
    if (!root) {
      return [];
    }
    let qu = [];
    let res = [];
    qu.push(root);
    while (qu.length) {
      let temp = [];
      let size = qu.length;
      for (let i = 0; i < size; i++) {
        let node = qu.shift();
        temp.push(node.data);
        if (node.left) {
          qu.push(node.left);
        }
        if (node.right) {
          qu.push(node.right);
        }
      }
      res.push(temp);
    }
    return res;
  }
}

const avl = new AVL();
avl.insertInAVL(1);
avl.insertInAVL(2);
avl.insertInAVL(3);
avl.insertInAVL(4);
avl.insertInAVL(5);
avl.insertInAVL(6);
avl.insertInAVL(7);
avl.insertInAVL(8);

const pre = avl.preorderTraversal();
const post = avl.postorderTraversal();
const ino = avl.inorderTraversal();
const level = avl.levelOrderTraversal();
console.log(pre, post, ino, level);
