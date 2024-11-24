/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let st = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (st.length && temperatures[i] > temperatures[st[st.length - 1]]) {
      let pre = st.pop();
      result[pre] = i - pre;
    }
    st.push(i);
  }
  return result;
};
