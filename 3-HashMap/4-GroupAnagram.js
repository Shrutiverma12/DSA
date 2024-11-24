/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let mp = {};
  for (let i = 0; i < strs.length; i++) {
    let a = strs[i].split("").sort().join("");
    if (mp[a] != undefined) {
      mp[a].push(strs[i]);
    } else {
      mp[a] = [strs[i]];
    }
  }
  return Object.values(mp);
};

