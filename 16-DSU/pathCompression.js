function UNION(x, y, parent, size) {
  //O(log*n)
  let xRoot = FIND(x, parent);
  let yRoot = FIND(y, parent);

  if (xRoot === yRoot) return;
  if (size[xRoot] < size[yRoot]) {
    parent[xRoot] = yRoot;
    size[yRoot] += size[xRoot];
  } else {
    parent[yRoot] = xRoot;
    size[xRoot] += size[yRoot];
  }
}
function FIND(x, parent) {
  if (parent[x] !== x) {
    parent[x] = FIND(parent[x], parent);
  }
  return parent[x];
}
let parent = [0, 1, 2, 3, 4, 5];
let size = [1, 1, 1, 1, 1, 1];

UNION(0, 1, parent, size);
UNION(2, 3, parent, size);
UNION(4, 5, parent, size);

console.log(parent);
console.log(size);
