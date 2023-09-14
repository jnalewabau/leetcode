export function canConstruct(ransomNote: string, magazine: string): boolean {
  let magazineToBeUsed = magazine.split("");

  for (const rChar of ransomNote) {
    // console.log({ rChar });

    const index = magazineToBeUsed.indexOf(rChar);

    if (index === -1) {
      // console.log(` - Not found`);
      return false;
    }

    // Remove rChar from magazineToBeUsed
    magazineToBeUsed.splice(index, 1);
    // console.log({ magazineToBeUsed });
  }
  return true;
}
