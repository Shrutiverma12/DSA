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

function bfs(grid) {
  let qu = [];
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        qu.push([[i, j], 0]);
      }
    }
  }
  let res = 0;
  while (qu.length != 0) {
    let cur = qu.shift();
    let cor = cur[0];
    let tm = cur[1];
    for (let ni = 0; ni < 4; ni++) {
      let nx = cor[0] + ne[ni][0];
      let ny = cor[1] + ne[ni][1];
      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
      if (grid[nx][ny] == 1) {
        qu.push([[nx, ny], tm + 1]);
        res = Math.max(res, tm + 1);
        grid[nx][ny] = 2;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) return -1;
    }
  }
  return res;
}
var orangesRotting = function (grid) {
  return bfs(grid);
};
