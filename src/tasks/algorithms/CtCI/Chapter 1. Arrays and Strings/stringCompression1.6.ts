const str: string = "aaaabbcccccdDDDhhhhJJJk";

const stringCompression = (s: string): string[] => {
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

console.log(stringCompression(str));

console.time();
for (let i = 1; i < 10000000; i++) {
  stringCompression(str);
}
console.timeEnd();
