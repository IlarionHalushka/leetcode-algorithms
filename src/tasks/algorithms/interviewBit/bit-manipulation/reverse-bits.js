module.exports = {
  // doesn't work on big inputs
// 	reverse : function(A){
//         var res = 0;
//         var arr = [];

//         if (A >= 4294967295) return 4294967295;

//         for (var i = 0; i <= 32; i++) {
//             if ((Math.pow(2, i) & A) === Math.pow(2, i)) {
//                 res += Math.pow(2, 31 - i);
//             }
//         }

//         return res;
// 	}

  reverse : function(A){
    var res = 0;

    for (var i = 0; i < 32; i++) {
      res *= 2;
      res += A & 1;
      A = A >> 1;
    }

    return res;
  }
};
