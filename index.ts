export function summaryRanges(nums: number[]): string[] {
  if (nums.length == 0) {
    return [];
  }

  if (nums.length == 1) {
    return [nums[0].toString()];
  }

  nums.push(0);
  let rangeStart = nums[0];
  let rangeEnd = nums[0];

  const rangeDescriptions: string[] = [];

  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i];
    // console.log({ currentNum });

    // Check end number - if it's in sequence then extend the range
    if (nums[i] === rangeEnd + 1) {
      rangeEnd = currentNum;
      continue;
    }

    // Range has finished so we push a string based on range start
    // and rangeEnd
    if (rangeEnd === rangeStart) {
      rangeDescriptions.push(`${rangeStart}`);
    } else {
      rangeDescriptions.push(`${rangeStart}->${rangeEnd}`);
    }

    rangeStart = rangeEnd = nums[i];
  }

  // console.log({ ranges });
  return rangeDescriptions;
}
