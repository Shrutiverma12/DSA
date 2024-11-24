function hashFunction(key) {
  //takes key as a parameter
  //apply the hashFunction on that key
  //the result of the hashFunction is the bucket indexin the given array
  let ans = 0; //this is going to final hashed value
  let p = 101; // prime number to key
  let pow = 1; // intially power is p^0
  let c = 32;
  for (let i = 0; i < key.length; i++) {
    //go to each charecter of given
    let asciiValue = ascii(key, i);
    ans = ((ans % c) + (((asciiValue % c) * (pow % c)) % c)) % c;

    //for next iteration we will increment the power
    pow = (((pow % c) * p) % c) % c;
  }
  return ans;
}
function ascii(key, index) {
  //give us ascii
  return key.charCodeAt(index);

  
}

console.log(hashFunction("banana"));
