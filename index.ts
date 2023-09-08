import common from "mocha/lib/interfaces/common";

// spell-checker:ignore strs
export function longestCommonPrefix(strs: string[]): string {
  // Sort the strings
  // Iterate over all the words based on this length looking for the same character
  // exit when there  is no longer a match
  // If one the words is empty then we should return ""
  strs.sort((a, b) => a.localeCompare(b));

  // console.log(strs);

  // We only need to compare the first and last strings as
  // the others are all sorted in between these two

  const firstWord = strs[0];
  const lastWord = strs[strs.length - 1];

  // console.log({ firstWord });
  // console.log({ lastWord });

  let commonPrefix = [];
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== lastWord[i]) {
      break;
    }
    commonPrefix.push(firstWord[i]);
  }

  return commonPrefix.join("");
}

// // Find the shortest word as this is the maximum potential common prefix
// // Iterate over all the words based on this length looking for the same character
// // exit when there  is no longer a match
// // If one the words is empty then we should return ""
// const strLengths = strs.map((s) => s.length);
// let lengthToCheck = strLengths.reduce((prev, current) =>
//   Math.min(prev, current)
// );
// // console.log({ lengthToCheck });

// let commonPrefix = "";
// for (let i = 0; i < lengthToCheck; i++) {
//   const expectedChar = strs[0][i];
//   // console.log({ expectedChar });
//   // Check every string

//   let matchOnAllStrings = true;
//   for (const str of strs) {
//     // console.log(`${str[i]}`);

//     if (str[i] !== expectedChar) {
//       matchOnAllStrings = false;
//     }
//   }
//   // console.log({ matchOnAllStrings });

//   if (matchOnAllStrings === false) {
//     break;
//   }

//   commonPrefix += expectedChar;
//   // console.log({ commonPrefix });
