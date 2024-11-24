/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let st = [];
  let dir = path.split("/");
  for (let i = 0; i < dir.length; i++) {
    if (dir[i] == "." || !dir[i]) {
      continue;
    } else if (dir[i] == "..") {
      if (st.length > 0) {
        st.pop();
      }
    } else {
      st.push(dir[i]);
    }
  }
  return "/" + st.join("/");
};
