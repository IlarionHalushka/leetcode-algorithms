var myAtoi = function(str) {
  let i=0, sign = 1, num = 0, MIN = -2147483648, MAX = 2147483647;
  str = str.trim();
  if (str[i]==='-' || str[i]==='+') sign = str[i++]==='-'?-1:1;
  while (str[i] && str[i].charCodeAt(0)-48 <= 9 && str[i].charCodeAt(0)-48 >= 0) {
    num = num*10 + (str[i++].charCodeAt(0)-48);
  }
  num = sign*num;
  return num<=MIN?MIN:num>=MAX?MAX:num;
};
