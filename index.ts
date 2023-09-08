export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const tempT = t.split("");

  for (let i = 0; i < s.length; i++) {
    const indexT = tempT.indexOf(s[i]);
    // console.log(`processing: [${s[i]}] : index: ${indexT}`);

    if (indexT === -1) {
      // Can't be an anagram is it doesn't have character
      return false;
    }

    // remove this character from tempT
    tempT.splice(indexT, 1);
    // console.log(`found and reduced tempT to : [${tempT}]`);
  }
  return true;
}

// const sSorted = s
// .split("")
// .sort((a, b) => a.localeCompare(b))
// .join("");
// const tSorted = t
// .split("")
// .sort((a, b) => a.localeCompare(b))
// .join("");

// return sSorted === tSorted;
