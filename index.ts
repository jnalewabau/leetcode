// spell-checker:ignore nums
export function removeDuplicates(nums: number[]): number {
  let indexToUpdate = 0;
  let uniqueValue: number | null = null;

  nums.forEach((num, index) => {
    if (uniqueValue !== nums[index]) {
      uniqueValue = num;

      nums[indexToUpdate] = num;
      indexToUpdate++;
    }
  });

  return indexToUpdate;
}

// const numSet = new Set<number>();
// nums.forEach((num) => numSet.add(num));

// let index = 0;
// numSet.forEach((num) => (nums[index++] = num));

// return numSet.size;
