module.exports = {
  //param A : integer
  //return an integer
  colorful : function(A){
    var hash = {};
    var digits = String(A);

    for (var i = 0; i < digits.length; i++) {
      var curr = 1;

      for (var j = i; j < digits.length; j++) {
        curr = curr * digits[j];
        if (hash[curr]) return 0;
        hash[curr] = true;
      }
    }

    return 1;
  }
};
