/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let st = [];
  let i = 0;
  while (i < asteroids.length) {
    if (st.length == 0) {
      st.push(asteroids[i]);
      i++;
    } else {
      if (st[st.length - 1] > 0 && asteroids[i] < 0) {
        if (st[st.length - 1] == Math.abs(asteroids[i])) {
          st.pop();
          i++;
        } else {
          if (Math.abs(st[st.length - 1]) > Math.abs(asteroids[i])) {
            i++;
          } else {
            while (
              st.length != 0 &&
              st[st.length - 1] > 0 &&
              asteroids[i] < 0 &&
              st[st.length - 1] < Math.abs(asteroids[i])
            ) {
              st.pop();
            }
          }
        }
      } else {
        st.push(asteroids[i]);
        i++;
      }
    }
  }
  return st;
};
