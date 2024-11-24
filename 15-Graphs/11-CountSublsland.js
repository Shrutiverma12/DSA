/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */

var countSubIslands = function (grid1, grid2) {
  let flag;
  function dfs(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid2.length ||
      j >= grid2[0].length ||
      grid2[i][j] !== 1
    ) {
      return;
    }
    grid2[i][j] = 2;
    if (grid1[i][j] !== 1) flag = 0;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
  let count = 0;
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[0].length; j++) {
      if (grid2[i][j] == 1) {
        flag = 1;
        dfs(i, j);
        if (flag == 1) count++;
      }
    }
  }
  return count;
};
