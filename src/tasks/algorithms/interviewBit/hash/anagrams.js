// MY SOLUTION minutes:  26/45, score: 306/350
module.exports = {
  sortString: function(s) {
    return s.split('').sort(function(a, b) { return a.charCodeAt(0) - b.charCodeAt(0); }).join('');
  },
  anagrams : function(A){
    var hashKeys = [];
    var hash = {};

    for (var i = 0; i < A.length; i++) {
      var curr = this.sortString(A[i]);
      if (hash[curr]) {
        hash[curr].push(i + 1); // + 1 because indexing starts from 1, not 0
      } else {
        hash[curr] = [i + 1]; // + 1 because indexing starts from 1, not 0
        // to save the order: Within a group containing A[i] and A[j], A[i] comes before A[j] if i < j
        hashKeys.push(curr);
      }
    }

    var res = [];

    for (var i = 0; i < hashKeys.length; i++) {
      res.push(hash[hashKeys[i]]);
    }

    return res;
  }
};
