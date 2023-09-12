export function isSubsequence(s: string, t: string): boolean {
  let tIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const charToFind = s[i];
    // console.log({ charToFind });
    // console.log({ tIndex });

    // Find the index of s[i] in t
    tIndex = t.indexOf(charToFind, tIndex);

    if (tIndex === -1) {
      return false;
    }

    // console.log({ tToSearch });
  }

  return true;
}

// let tToSearch = t;
// for (let i = 0; i < s.length; i++) {
//   const charToFind = s[i];
//   // console.log({ charToFind });
//   // console.log({ tToSearch });

//   // Find the index of s[i] in t
//   const indexInT = tToSearch.indexOf(charToFind);

//   if (indexInT === -1) {
//     return false;
//   }

//   // We have found the character, so take
//   tToSearch = tToSearch.slice(indexInT + 1);
//   // console.log({ tToSearch });
// }

// return true;
