const strNotUnique: string = "uniquecharacters";
const strUnique: string = "qwertyuiopasdfghjklmnbvcx";

const isUnique = (str: string): boolean => {
  // @ts-ignore
  const set = new Set();

  for (const c of str) {
    if (set.has(c)) {
      return false;
    }
    set.add(c);
  }

  return true;
};

console.log(isUnique(strNotUnique));
console.log(isUnique(strUnique));
