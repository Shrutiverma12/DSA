/**
 * @param {number[][]} grid
 * @return {number}
 */
let ne = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
function bfs(i, j, grid) {
  let qu = [];
  qu.push([i, j]);
  grid[i][j] = -1;
  let res = 1;
  while (!qu.length == 0) {
    let cur = qu.shift();
    for (let n = 0; n < 4; n++) {
      let neX = cur[0] + ne[n][0];
      let neY = cur[1] + ne[n][1];
      if (neX < 0 || neY < 0 || neX >= grid.length || neY >= grid[0].length)
        continue;
      if (grid[neX][neY] === 1) {
        grid[neX][neY] = -1;
        qu.push([neX, neY]);
        res++;
      }
    }
  }
  return res;
}
var maxAreaOfIsland = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, bfs(i, j, grid));
      }
    }
  }
  return res;
};
