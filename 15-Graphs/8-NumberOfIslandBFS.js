/**
 * @param {character[][]} grid
 * @return {number}
 */
//Tc-O(mn)
let ne = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
function bfs(i, j, grid) {
  let qu = [];
  qu.push([i, j]);
  grid[i][j] = "-1";
  while (!(qu.length == 0)) {
    let curr = qu.shift();
    for (let n = 0; n < 4; n++) {
      let neX = curr[0] + ne[n][0]; // n=0 i-1, n=1 i, n=2 i+1, n=3 i
      let neY = curr[1] + ne[n][1]; // n=0 j, n=1 j-1, n=2 j, n=3 j+1
      if (neX < 0 || neY < 0 || neX >= grid.length || neY >= grid[0].length)
        continue;
      if (grid[neX][neY] === "1") {
        grid[neX][neY] = "-1";
        qu.push([neX, neY]);
      }
    }
  }
}

var numIslands = function (grid) {
  let island = 0;
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        bfs(i, j, grid);
        island++;
      }
    }
  }
  return island;
};
