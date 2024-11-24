/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
class Heap {
  constructor(cmp) {
    this.arr = [];
    this.cmp = cmp;
  }
  upheapify(idx) {
    // idx represents the index to start upheapify from
    while (idx > 0) {
      // till the time idx doesnt reach the root
      let pi = Math.floor((idx - 1) / 2);
      if (this.cmp(this.arr[pi], this.arr[idx])) {
        let temp = this.arr[pi];
        this.arr[pi] = this.arr[idx];
        this.arr[idx] = temp;

        idx = pi;
      } else {
        break;
      }
    }
  }
  insert(data) {
    this.arr.push(data);
    this.upheapify(this.arr.length - 1);
  }
  get() {
    return this.arr[0];
  }
  downheapify(idx) {
    while (idx < this.arr.length) {
      let lc = 2 * idx + 1; //possible left child index
      let rc = 2 * idx + 2; //possible right child index
      let maxEl = idx; // assume root is the max

      if (lc < this.arr.length && this.cmp(this.arr[maxEl], this.arr[lc])) {
        //left child exist and greater also
        maxEl = lc;
      }
      if (rc < this.arr.length && this.cmp(this.arr[maxEl], this.arr[rc])) {
        //right child exist and greater also
        maxEl = rc;
      }

      //we know biggest element

      if (idx == maxEl) {
        break;
      } else {
        //swap root and maxEl
        let temp = this.arr[idx];
        this.arr[idx] = this.arr[maxEl];
        this.arr[maxEl] = temp;
        idx = maxEl;
      }
    }
  }

  removal() {
    if (this.arr.length == 0) return;
    //1-swap the root with last element
    let temp = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr[this.arr.length - 1] = temp;

    //2- remove last
    this.arr.pop();

    //3-downheapify
    this.downheapify(0);
  }
  display() {
    console.log(this.arr);
  }
  isEmpty() {
    return this.arr.length == 0;
  }
}
class Trip {
  constructor(n, d, v) {
    this.n = n;
    this.d = d;
    this.v = v;
  }
}
var kthSmallestPrimeFraction = function (arr, k) {
  const hp = new Heap((t1, t2) => {
    return t1.v > t2.v;
  });
  for (let i = 0; i < arr.length; i++) {
    hp.insert(new Trip(0, i, arr[0] / arr[i]));
  }
  for (let i = 0; i < k - 1; i++) {
    const el = hp.get();
    hp.removal();
    if (el.n < arr.length - 1) {
      hp.insert(new Trip(el.n + 1, el.d, arr[el.n + 1] / arr[el.d]));
    }
  }
  return [arr[hp.get().n], arr[hp.get().d]];
};
