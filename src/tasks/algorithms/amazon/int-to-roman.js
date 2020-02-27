// public static String intToRoman(int num) {
//   String M[] = {"", "M", "MM", "MMM"};
//   String C[] = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
//   String X[] = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
//   String I[] = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
//   return M[num/1000] + C[(num%1000)/100] + X[(num%100)/10] + I[num%10];
// }

// My solution
var intToRoman = function(num) {
  const mapper = [
    { v: '1000', l: 'M' },
    { v:'900',l: 'CM' },
    { v:'500',l: 'D' },
    { v:'400',l: 'CD' },
    { v:'100',l: 'C' },
    { v:'90',l: 'XC' },
    { v:'50', l: 'L' },
    {v: '40', l: 'XL' },
    {v: '10', l: 'X' },
    { v:'9', l: 'IX' },
    {v: '5', l: 'V' },
    { v:'4', l: 'IV' },
    { v:'1', l: 'I' },
  ];


  let res = [];
  let i = 0;

  while (i < mapper.length && num > 0) {
    while (mapper[i].v <= num) {
      res.push(mapper[i].l);
      num -= mapper[i].v;
    }
    i++;
  }

  return res.join('');
};

