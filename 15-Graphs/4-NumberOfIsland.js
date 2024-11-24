/**
 * @param {character[][]} grid
 * @return {number}
 */
let g, m, n, island;
function dfs(i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n || g[i][j] != "1") {
    return;
  } else {
    g[i][j] = "0";
    dfs(i, j + 1);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i - 1, j);
  }
}
var numIslands = function (grid) {
  g = grid;
  island = 0;
  m = grid.length;
  n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1") island += 1;
      dfs(i, j);
    }
  }
  return island;
};
