var FreqStack = function () {
  this.freqMap = {};
  this.maxFreq = 0;
  this.eleMap = {};
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  //Freq. Map
  if (this.freqMap[val] == undefined) {
    this.freqMap[val] = 1;
  } else {
    this.freqMap[val] += 1;
  }
  //Max. Freq
  let max = this.freqMap[val];
  this.maxFreq = Math.max(max, this.maxFreq);

  //Element Map
  if (this.eleMap[this.freqMap[val]] == undefined) {
    this.eleMap[this.freqMap[val]] = [val];
  } else {
    this.eleMap[this.freqMap[val]].push(val);
  }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  let arr = this.eleMap[this.maxFreq];
  let result = arr[arr.length - 1];
  this.eleMap[this.maxFreq].pop();
  this.freqMap[result]--;
  if (arr.length == 0) {
    delete this.eleMap[this.maxFreq];
    this.maxFreq--;
  }

  return result;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
