export function isIsomorphic(s: string, t: string): boolean {
  // console.log({ s });
  // console.log({ t });

  if (s.length !== t.length) {
    return false;
  }
  const lengthOfStrings = s.length;

  const modifiedS = s.split("");
  const charMapping = new Map<string, string>();
  const mapped = new Set<string>();

  for (let i = 0; i < lengthOfStrings; i++) {
    const sChar = s[i];
    const tChar = t[i];

    console.log(`${sChar} => ${tChar}`);

    // Update the character map for this character
    if (charMapping.has(sChar)) {
      // Does it match the mapping we currently have?
      if (charMapping.get(sChar)! !== tChar) {
        // console.log(
        //   `Mismatched char mapping ${sChar} is matched to ${charMapping.get(
        //     sChar
        //   )} NOT ${tChar}`
        // );
        return false;
      }
    } else {
      // Also make sure that tChar is not in the map (as a key)
      if (mapped.has(tChar)) {
        // console.log(
        //   `tChar ${tChar} is already on map ${charMapping.get(tChar)}`
        // );
        return false;
      }

      charMapping.set(sChar, tChar);
      mapped.add(tChar);
    }

    modifiedS[i] = tChar;
    // console.log({ charMapping });
    // console.log({ modifiedS });
  }

  // console.log(`Final modification - ${modifiedS}`);

  return modifiedS.join("") === t;
}
