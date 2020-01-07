module.exports = {
  isSameTree : function(A, B) {
    // check link
    if (A === B) return 1;

    // check null values
    if (A === null || B === null) return 0;

    // check data equality
    if (A.data !== B.data) return 0;

    // iterate leaves
    if (!this.isSameTree(A.left, B.left)) return 0;
    if (!this.isSameTree(A.right, B.right)) return 0;

    return 1;
  }
};
