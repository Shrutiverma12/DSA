/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

//TC - O(V+E)
function bfs(src, dest, g, visited) {
  if (src == dest) return true;
  const qu = [];
  qu.push(src);
  visited.add(src);
  while (!(qu.length == 0)) {
    const el = qu.shift();
    for (const ne of g[el]) {
      if (ne == dest) return true;
      if (!visited.has(ne)) {
        visited.add(ne);
        qu.push(ne);
      }
    }
  }
  return false;
}
function dfs(src, dest, g, visited) {
  if (src == dest) return true;
  let ans = false;
  visited.add(src);
  for (const ne of g[src]) {
    if (!visited.has(ne)) {
      ans = ans || dfs(ne, dest, g, visited);
    }
  }
  return ans;
}
var validPath = function (n, edges, source, destination) {
  const g = new Array(n);

  for (let i = 0; i < n; i++) {
    g[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    let u = edges[i][0];
    let v = edges[i][1];
    g[u].push(v);
    g[v].push(u);
  }

  return dfs(source, destination, g, new Set());
};
