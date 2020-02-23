var longestPalindrome = function(s) {
  if (!s || s.length <= 1) {
    return s;
  }

  let max = '';

  for (let i = 0; i < s.length - 1; i++) {
    // for even palindroms [i,i]
    const evenPalindrome =  helper(s, i, i + 1);
    // for odd palindroms [i, i+1],
    const oddPalindrome =  helper(s, i, i);

    if (evenPalindrome.length > max.length) {
      max = evenPalindrome;
    }
    if (oddPalindrome.length > max.length) {
      max = oddPalindrome;
    }
  }
  return max;
  // return s.slice(res.l, res.r);
};

var helper = function(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r);
}

// SECOND SOLUTION a bit more optimal because of no s.slice in helper
var longestPalindrome = function(s) {
  if (!s || s.length <= 1) {
    return s;
  }

  let max = '';
  let left = 0;
  let right = s.length - 1;

  for (let i = 0; i < s.length - 1; i++) {
    // for even palindroms [i,i]
    const evenPalindrome =  helper(s, i, i + 1);
    const evenPalindromeLength = evenPalindrome[1] - evenPalindrome[0];
    // for odd palindroms [i, i+1],
    const oddPalindrome =  helper(s, i, i);
    const oddPalindromeLength = oddPalindrome[1] - oddPalindrome[0];

    if (evenPalindromeLength > max) {
      max = evenPalindromeLength;
      left = evenPalindrome[0];
      right = evenPalindrome[1];
    }
    if (oddPalindromeLength > max) {
      max = oddPalindromeLength;
      left = oddPalindrome[0];
      right = oddPalindrome[1];
    }
  }
  // return {left, right}
  return s.slice(left, right);
};

var helper = function(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return [l+1, r];
}
