// spell-checker:ignore nums
export function removeElement(nums: number[], val: number): number {
  let indexToUpdate = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // Override the nums array in place
      nums[indexToUpdate] = nums[i];
      indexToUpdate++;
    }
  }

  return indexToUpdate;
}
