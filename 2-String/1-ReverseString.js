var reverseWords = function (s) {
  let n = s.length;
  let i = 0;
  let result = "";
  while (i < n) {
    while (i < n && s[i] == " ") i++;
    if (i >= n) break;
    let j = i + 1;
    while (j < n && s[j] != " ") j++;
    let sub = s.substring(i, j);
    if (result.length == 0) result = sub;
    else result = sub + " " + result;
    i = j + 1;
  }
  return result;
};
