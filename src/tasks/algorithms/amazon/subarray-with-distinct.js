const assert = require('assert').strict;

var subarraysWithKDistinct = function(A, k) {
  const window = new Map();
  let count = 0;
  let windowLength = 0;

  for (let i = 0; i < A.length; i++) {
    const curr = A[i];
    console.log(`BEFORE curr ${curr}, window ${JSON.stringify([...window.entries()])}, windowLength ${windowLength}, count ${count}`)
    window.set(curr, window.get(curr) + 1 || 1);
    windowLength++;

    while (window.size > k) {
      // const firstInWindow = A[i - windowLength - 1];
      const firstInWindow = A[i - windowLength - 1];
      console.log('firstInWindow',firstInWindow)
      if (window.get(firstInWindow) === 1) {
        window.delete(firstInWindow);
      } else if (window.get(firstInWindow) > 1) {
        window.set(firstInWindow, window.get(firstInWindow) - 1);
      }
      windowLength--;
    }
    console.log('mid', window)
    if (window.size === k) {
      count++;
      // let diff = windowLength - window.size;
      // while (diff > 0) {
      //   count++;
      //   diff--;
      // }
      let wLength = windowLength;
      while (window.size === k) {
        while (A[i - wLength - 1] === A[i - wLength - 2]) {
          count++;
          wLength--;
        }
      }

    }
    console.log(`AFTER curr ${curr}, window ${JSON.stringify([...window.entries()])}, windowLength ${windowLength}, count ${count} \n`)
  }

  return count;
};

assert.deepEqual(subarraysWithKDistinct(['a','a','a','b','a','b','c'], 2), 13);
assert.deepEqual(subarraysWithKDistinct([1,1,1,2,1,1,2,3], 2), 18);
// assert.deepEqual(subarraysWithKDistinct([1,2,1,3,4], 3), 3);
// subarraysWithKDistinct([1,1,1,2,1,2,3], 2)
