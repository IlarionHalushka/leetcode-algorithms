module.exports = {
  // 1 option - remove duplicates from res in the end, but it's not fast
  //    Array.from(new Set(res.map(JSON.stringify)), JSON.parse);
  // 2 option - in recursion check that if current === previous, then continue
  //    if (i > start && A[i] == A[i - 1])  continue
  // 3 option - put subsets in hash as strings joined by ',' and then just split by ','

  // used 2nd option
  subsetsWithDup : function(A) {
    function recurse(arr, start) {
      res.push(arr.slice());

      for (var i = start; i < A.length; i++) {
        if (i > start && A[i] === A[i - 1]) continue;

        arr.push(A[i]);
        recurse(arr, i + 1);
        arr.pop();
      }
    }

    A.sort(function(a,b) { return a - b; });

    var res = [];
    recurse([], 0);

    return res;
  }
};
