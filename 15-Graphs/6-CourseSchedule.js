/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function topoSort(graph, n, indegree) {
  let qu = [];
  let vis = new Set();
  for (let i = 0; i < n; i++) {
    if (indegree[i] == 0) {
      qu.push(i);
      vis.add(i);
    }
  }
  let count = 0;
  while (!(qu.length == 0)) {
    let cur = qu.shift();
    count++;
    for (const ne of graph[cur]) {
      if (!vis.has(ne)) {
        indegree[ne]--;
        if (indegree[ne] == 0) {
          qu.push(ne);
          vis.add(ne);
        }
      }
    }
  }
  return count == n;
}
var canFinish = function (numCourses, prerequisites) {
  //cerate graph
  let g = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) g[i] = new Array();

  let indegree = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    const curr = prerequisites[i];
    const a = curr[0];
    const b = curr[1];
    g[b].push(a);
    indegree[a]++;
  }
  return topoSort(g, numCourses, indegree);
};
