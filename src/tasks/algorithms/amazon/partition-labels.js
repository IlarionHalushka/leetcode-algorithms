// my solution # 1 beats 32%
var partitionLabels = function(S) {
  let maxIndex = 0;
  const arrayS = S.split('');
  const result = [];


  for (let i = 0; i < S.length; i++) {
    if (arrayS.lastIndexOf(arrayS[i]) > maxIndex) {
      maxIndex = arrayS.lastIndexOf(arrayS[i]);
    }
    if (i === maxIndex) {
      const l = arrayS.splice(0, maxIndex + 1);
      result.push(l.length);
      i = -1;
      maxIndex = 0;
    }
    if (arrayS.length === 0)     return result;
  }
};


// my solution #2 beats 32%
var partitionLabels = function(S) {
  let maxIndex = 0;
  const arrayS = S.split('');
  const result = [];
  let gone = 0;

  for (let i = 0; i < arrayS.length; i++) {

    const currentLastIndex = arrayS.lastIndexOf(arrayS[i]);
    if (currentLastIndex > maxIndex) maxIndex = currentLastIndex;

    if (i === maxIndex) {
      result.push(maxIndex + 1 - gone);
      gone = maxIndex + 1;
    }

  }
  return result;
};

// my solution #3 beats 96.5% without using extra space for arrayS
var partitionLabels = function(S) {
  let maxIndex = 0;
  // const arrayS = S.split('');
  const result = [];
  let gone = 0;

  for (let i = 0; i < S.length; i++) {

    const currentLastIndex = S.lastIndexOf(S.charAt(i));
    if (currentLastIndex > maxIndex) maxIndex = currentLastIndex;

    if (i === maxIndex) {
      result.push(maxIndex + 1 - gone);
      gone = maxIndex + 1;
    }
  }
  return result;
};

// my solution using Map
var partitionLabels = function(S) {
  const map = new Map();

  for (let i = 0; i < S.length; i++) {
    map.set(S[i], (map.get(S[i]) || 0) + 1);
  }

  const map2 = new Map();
  const res = [];
  let prev = -1;

  for (let i = 0; i < S.length; i++) {
    if (!map2.get(S[i])) {
      map2.set(S[i], map.get(S[i]));
    }

    if (map2.get(S[i]) === 1) {
      map2.delete(S[i]);
    } else {
      map2.set(S[i], map2.get(S[i]) - 1);
    }

    if (map2.size === 0) {
      res.push(i - prev);
      prev = i;
    }
  }
  return res;
};

// BEST SOLUTION. Not mine :(
// public List<Integer> partitionLabels(String S) {
//   if(S == null || S.length() == 0){
//     return null;
//   }
//   List<Integer> list = new ArrayList<>();
//   int[] map = new int[26];  // record the last index of the each char
//
//   for(int i = 0; i < S.length(); i++){
//     map[S.charAt(i)-'a'] = i;
//   }
//   // record the end index of the current sub string
//   int last = 0;
//   int start = 0;
//   for(int i = 0; i < S.length(); i++){
//     last = Math.max(last, map[S.charAt(i)-'a']);
//     if(last == i){
//       list.add(last - start + 1);
//       start = last + 1;
//     }
//   }
//   return list;
// }
