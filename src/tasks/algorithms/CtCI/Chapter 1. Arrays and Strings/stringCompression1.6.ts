const str: string = "aaaabbcccccdDDDhhhhJJJk";

const permutation = (s: string): string[] => {
  // result = ''
  const result: string[] = [];

  for (let i = 0; i < s.length - 1; i++) {
    let counter: number = 0;

    while (s.charCodeAt(i) === s.charCodeAt(i + 1)) {
      counter++;
      i++;
    }

    if (counter) result.push(s[i - counter] + ++counter);
    else result.push(s[i]);
  }

  return result;
};

console.log(permutation(str));

console.time();
for (let i = 1; i < 10000000; i++) {
  permutation(str);
}
console.timeEnd();
