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

function kruskals(edgeList, noOfVertices) {
  edgeList.sort((e1, e2) => e1[2] - e2[2]);

  let spanningTreeSum = 0;
  let parent = new Array(noOfVertices).fill(0);
  parent = parent.map((element, index) => index);
  let size = new Array(noOfVertices).fill(1);
  for (let edge of edgeList) {
    let [u, v, weight] = edge;
    if (FIND(u, parent) !== FIND(v, parent)) {
      UNION(u, v, parent, size);
      spanningTreeSum += weight;
    }
  }
  return spanningTreeSum;
}

let edgeList = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4],
];

let noOfVertices = 4;
console.log(kruskals(edgeList, noOfVertices));
