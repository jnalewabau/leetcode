export function containsDuplicate(nums: number[]): boolean {
  // Create a set from nums input
  const numSet = new Set<number>();
  nums.forEach((num) => numSet.add(num));

  // Compare the size of the set against the input length
  // Set will be smaller if there are duplicates
  return numSet.size < nums.length;
}

// const numSet = new Set<number>();

// for (const num of nums) {
//   if (numSet.has(num)) {
//     return true;
//   }

//   numSet.add(num);
// }

// return false;
// }
