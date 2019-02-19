const str: string = "Mr djhfjs fjsdf    ";
const str3: string = "Mr djhfjas fjsdf    ";
const str4: string = "Mr djfjas fjsdf    ";
const str2: string = "Mr djhfjs fjsdf   ";
const str5: string = "Mr djhfjsss fjsdf   ";
const str6: string = "Mr djhfjsss fjsdf ";
const str7: string = "Mr  djhfsss fjsdf ";

const oneWay = (s: string, s2: string): boolean => {
  const N: number = s.length > s2.length ? s.length : s2.length;

  let j: number = 0;
  let k: number = 0;
  let amountOfDifferences: number = 0;

  for (let i = 0; i < N; i++) {
    if (s.charAt(j) !== s2.charAt(k)) {
      amountOfDifferences++;
      s.length !== s2.length && (s.length > s2.length ? j++ : k++);
    }
    j++;
    k++;
  }

  return amountOfDifferences <= 1;
};

oneWay("pale", "ple");
oneWay("pales", "pale");
oneWay("pale", "bale");
oneWay("pale", "bake");

console.time();
// for (let i = 1; i < 10000000; i++) {
//   oneWay(str, str2);
//   oneWay(str, str3);
//   oneWay(str, str4);
// }
console.timeEnd();
