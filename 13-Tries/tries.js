class Node {
  constructor(data) {
    this.data = data;
    this.isTerminal = false;
    this.children = {};
  }
}
var Trie = function () {
  this.root = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    if (cur.children[ch]) {
      cur = cur.children[ch];
    } else {
      let n = new Node(ch);
      cur.children[ch] = n;
      cur = cur.children[ch];
    }
  }
  cur.isTerminal = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    if (cur.children[ch]) {
      cur = cur.children[ch];
    } else {
      return false;
    }
  }
  return cur.isTerminal;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;
  for (let i = 0; i < prefix.length; i++) {
    let ch = prefix[i];
    if (cur.children[ch]) {
      cur = cur.children[ch];
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
