export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  // Slice the nums1 array to get the initial numbers to be compared
  const realNums1 = nums1.slice(0, m);
  // Contact the nums2 array to the realNums1 array and then sort it
  const sortedResult = [...realNums1, ...nums2].sort((a, b) => a - b);
  // Need to reset the nums1 array to the sortedResult array
  sortedResult.forEach((num, index) => {
    nums1[index] = num;
  });
}
