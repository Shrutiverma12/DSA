/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let preSmaller = [];
  let nextSmaller = [];
  let st1 = [];
  let st2 = [];
  //Pre Smaller
  for (let i = 0; i < heights.length; i++) {
    while (st1.length != 0 && heights[st1[st1.length - 1]] >= heights[i]) {
      st1.pop();
    }
    if (st1.length == 0) {
      preSmaller.push(-1);
    } else {
      preSmaller.push(st1[st1.length - 1]);
    }
    st1.push(i);
  }
  //NextSmaller
  for (let i = heights.length; i >= 0; i--) {
    while (st2.length != 0 && heights[st2[st2.length - 1]] >= heights[i]) {
      st2.pop();
    }
    if (st2.length == 0) {
      nextSmaller.push(-1);
    } else {
      nextSmaller[i] = st2[st2.length - 1];
    }
    st2.push(i);
  }

  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    let cur = (nextSmaller[i] - preSmaller[i] - 1) * heights[i];
    max = Math.max(max, cur);
  }
  return max;
};
