// COPIED FROM PYTHON SOLUTION AND ADJUSTED FOR JS

module.exports = {
  subsetsUtil: function(A, res, subset, index) {
    res.push(subset.slice());

    for (var i = index; i < A.length; i++) {
      // include the A[i] in subset.
      subset.push(A[i]);

      // move onto the next element.
      this.subsetsUtil(A, res, subset, i + 1);

      // exclude the A[i] from subset and triggers backtracking.
      subset.pop();
    }
    return;
  },
  subsets : function(A) {
    var res = [];
    var subset = [];

    A.sort(function(a,b) { return a - b; });

    this.subsetsUtil(A, res, subset, 0);
    return res;
  }
};
