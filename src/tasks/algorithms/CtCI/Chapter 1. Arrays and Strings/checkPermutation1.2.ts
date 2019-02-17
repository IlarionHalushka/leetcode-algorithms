const str1: string = "qwerty";
const str2: string = "qwerty";
const str3: string = "ewrqta";

const checkPermutation = (s: string, ss: string): boolean => {
  if (s.length !== ss.length) return false;

  // @ts-ignore
  const setS = new Map();

  for (const c of s) {
    if (setS.has(c)) {
      setS.set(c, setS.get(c) + 1);
    } else {
      setS.set(c, 1);
    }
  }

  for (const c of ss) {
    if (setS.get(c) === 1) {
      setS.delete(c);
      continue;
    }

    if (setS.has(c)) {
      setS.set(c, setS.get(c) - 1);
    } else {
      return false;
    }
  }

  return setS.size === 0;
};

console.log(checkPermutation(str1, str2));
console.log(checkPermutation(str1, str3));
