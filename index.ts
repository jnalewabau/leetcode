export function wordPattern(pattern: string, s: string): boolean {
  const patternToStringMap = new Map<string, string>();
  const mappedValues = new Set<string>();

  const splitS = s.split(" ");

  // Length of pattern should match the number of words
  if (pattern.length !== splitS.length) {
    return false;
  }

  // Build up the mapping table
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const word = splitS[i];
    // console.log({ p });

    if (patternToStringMap.has(p) === false) {
      // Check to see whether this word has already been mapped
      if (mappedValues.has(word)) {
        return false;
      }
      // Store the associated word with the pattern
      patternToStringMap.set(p, word);
      mappedValues.add(word);
    }
  }

  //Create a string from the pattern and compare
  let expectedString = "";
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    expectedString += patternToStringMap.get(p)! + " ";
  }

  expectedString = expectedString.trimEnd();
  // console.log({ expectedString });
  // console.log({ s });
  return expectedString === s;
}
