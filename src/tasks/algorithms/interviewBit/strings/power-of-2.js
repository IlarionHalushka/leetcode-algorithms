module.exports = {
// won't work on large inputs
  // power : function(A){
  //     var a = Number(A);

  //     if (a === 1) return 0;

  //     var log = (Math.log(a) / Math.log(2)).toFixed(5);

  //     return Math.ceil(log) === Math.floor(log) ? 1 : 0;
  // }

  power : function(A) {
    var div = A;

    while (div.length > 1) {
      var carry = 0;
      var s = '';

      // at any step if last number is odd return 0
      if (div.charAt(div.length - 1) % 2 !== 0) return 0;

      // divide by 2
      for (var i = 0; i < div.length; i++) {
        var current = Number(div.charAt(i));

        if (current === 0) {
          s += String(0 + carry);
          carry = 0;
        } else if (current === 1) {
          s += String(0 + carry);
          carry = 5;
        } else if (current % 2 === 0) {
          s += String((current / 2) + carry);
          carry = 0;
        } else if (current % 2 !== 0) {
          s += String(Math.floor((current / 2)) + carry);
          carry = 5; // because we did Math.floor and additional 1 is left
        }
      }

      // remove preceding zeros
      for (var j = 0; j < s.length; j++) {
        if (s.charAt(j) !== '0') {
          div = s.slice(j);
          break;
        }
      }
    }

    return div === '2' || div === '4' || div === '8' ? 1 : 0;
  }
};
