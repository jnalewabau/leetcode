export function lengthOfLastWord(s: string): number {
  const trimmedEnd = s.trimEnd();

  const lastSpaceIndex = trimmedEnd.lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return trimmedEnd.length;
  }

  return trimmedEnd.length - lastSpaceIndex - 1;

  // // console.log({ trimmedEnd });
  // const splitString = trimmedEnd.split(" ");
  // // console.log({ splitString });

  // return splitString[splitString.length - 1].length;
}
