module.exports = {
  singleNumber : function(A){
    A.sort(function(a,b) { return a - b;});

    for (var i = 0; i < A.length; i+=2) {
      if (i === A.length - 1) return A[i];
      if ((A[i] ^ A[i+1]) !== 0) return A[i];
    }
  }
  // another solution would be to just XOR all values (not sorted) and then return what's left
};
