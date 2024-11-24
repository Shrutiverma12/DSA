/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function topoSort(g, n, ind) {
  let qu = [];
  let vis = new Set();
  for (let i = 0; i < n; i++) {
    if (ind[i] == 0) {
      qu.push(i);
      vis.add(i);
    }
  }
  let count = 0;
  let res = [];
  while (qu.length != 0) {
    let cur = qu.shift();
    count++;
    res.push(cur);
    for (const ne of g[cur]) {
      if (!vis.has(ne)) {
        ind[ne]--;
        if (ind[ne] == 0) {
          qu.push(ne);
          vis.add(ne);
        }
      }
    }
  }
  return count == n ? res : [];
}

var findOrder = function (numCourses, prerequisites) {
  let g = new Array(numCourses);

  for (let i = 0; i < numCourses; i++) g[i] = new Array();

  let indegree = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    let curr = prerequisites[i];
    let a = curr[0];
    let b = curr[1];
    g[b].push(a);
    indegree[a]++;
  }
  return topoSort(g, numCourses, indegree);
};
