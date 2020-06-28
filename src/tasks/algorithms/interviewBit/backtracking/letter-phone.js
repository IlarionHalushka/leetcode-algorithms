module.exports = {
  map: {
    0: [0],
    1: [1],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
  },
  recurse: function(arr, digits) {
    if (digits.length === 0) return arr;

    var temp = [];
    var letters = this.map[digits[0]];

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < letters.length; j++) {
        temp.push(String(arr[i]) + String(letters[j]));
      }
    }

    return this.recurse(temp, digits.slice(1));
  },
  letterCombinations : function(A){
    var initialArr = this.map[A[0]];
    var restDigits = A.slice(1);

    return this.recurse(initialArr, restDigits);
  }
};
