const str: string = "Mr djhfjs fjsdf    ";

const permutation = (s: string): boolean => {
  // put each symbol into Map
  // then iterate through map and check that only one value is % 2 === 0

  // put all values in Set - if exists then remove from Set
  // at the end check that Set size is 1 or 0
};

console.log(permutation(str));
console.log(permutation(str));

console.time();
for (let i = 1; i < 10000000; i++) {
  permutation(str);
}
console.timeEnd();
