/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  function daysReqiue(weights, mid) {
    let days = 1;
    let load = 0;
    for (let i = 0; i < weights.length; i++) {
      if (weights[i] + load > mid) {
        days++;
        load = weights[i];
      } else {
        load += weights[i];
      }
    }
    return days;
  }

  let low = Math.max(...weights);
  let high = weights.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let reqDay = daysReqiue(weights, mid);
    if (reqDay <= days) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
