/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let st1 = [];
  let st2 = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] == "#") {
      st1.pop();
    } else {
      st1.push(s[i]);
    }
    i++;
  }
  let j = 0;
  while (j < t.length) {
    if (t[j] == "#") {
      st2.pop();
    } else {
      st2.push(t[j]);
    }
    j++;
  }
  let k = 0;
  while (st1.length != 0 && st2.length != 0) {
    if (st1[k] != st2[k]) {
      return false;
    }
    st1.pop();
    st2.pop();
  }
  return st1.length == 0 && st2.length == 0;
};
