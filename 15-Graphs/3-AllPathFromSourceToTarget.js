/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
let g = [];
let result = [];
function dfs(curr, node) {
  if (node === g.length - 1) {
    result.push(curr.slice(0));
    return;
  }
  for (let i = 0; i < g[node].length; i++) {
    curr.push(g[node][i]);
    dfs(curr, g[node][i]);
    curr.pop();
  }
}
var allPathsSourceTarget = function (graph) {
  g = graph;
  result = [];
  dfs([0], 0);
  return result;
};
