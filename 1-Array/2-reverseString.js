var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  let temp;
  while (i < j) {
    //swapping
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
};
