export function majorityElement(nums: number[]): number {
  const numCounts = new Map<number, number>();

  for (const num of nums) {
    // Establish the count for the number
    const newCount = (numCounts.get(num) ?? 0) + 1;

    // If we are past the threshold required, return the number
    if (newCount > nums.length / 2) {
      return num;
    }

    // Store the count in th map
    numCounts.set(num, newCount);
  }

  throw Error("Invalid nums passed");
}

// for (const num of nums) {
//   const newCount = (numCounts.get(num) ?? 0) + 1;

//   if (newCount > nums.length / 2) {
//     return num;
//   }

//   numCounts.set(num, newCount);

// if (numCounts.has(num)) {
//   const currentCount = numCounts.get(num)!;
//   const newCount = currentCount + 1;

//   if (newCount > nums.length / 2) {
//     return num;
//   }

//   numCounts.set(num, currentCount + 1);
// } else {
//   numCounts.set(num, 1);
// }
// }
