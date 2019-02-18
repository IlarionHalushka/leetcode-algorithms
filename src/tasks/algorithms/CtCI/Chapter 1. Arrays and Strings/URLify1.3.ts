const str: string = "Mr djhfjs fjsdf    ";

const URLify = (s: string): string =>
  s
    .trim()
    .split(" ")
    .join("%20");

const URLify1 = (s: string, tl: number): string => {
  const spacesCount = s.split("").filter(c => c === " ").length;

  // * 2 because string '%20' contains 3 characters and one of them is already counted in tl
  let index = tl + spacesCount * 2;
  const result: string[] = [];

  for (let i = tl - 1; i >= 0; i--) {
    if (s.charAt(i) === " ") {
      result[index] = "0";
      result[index - 1] = "2";
      result[index - 2] = "%";
      index -= 3;
    } else {
      result[index] = s.charAt(i);
      index--;
    }
  }

  return result.join("");
};

console.log(URLify(str));
console.log(URLify1(str, 15));

console.time();
for (let i = 1; i < 10000000; i++) {
  URLify(str);
}
console.timeEnd();

console.time();
for (let i = 1; i < 10000000; i++) {
  URLify1(str, 15);
}
console.timeEnd();
