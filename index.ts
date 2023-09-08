// spell-checker:ignore nums
export function twoSum(nums: number[], target: number): number[] {
  // Work through the array
  // Take the start number and the numbers after it and add them
  // if it equals the target number return

  const numberMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    // here we find the difference between the target and number...
    // "difference" represents the number that needs to be added
    // onto "number" (the current number we're looping over) in order
    // to equal the function's target number
    const difference = target - number;

    // check numberMap for the difference value. if we already
    // looped over this number, that means it's in our map, therefore
    // we can retrieve the value from our map (O(1)), get its index, and return
    // the index we're currently looping over to complete the problem
    if (numberMap.has(difference)) {
      return [numberMap.get(difference), i];
    }

    // if we haven't already looped over the number, store it
    // and its index in a JS Map (hash table) so we can
    // get an O(1) search / access check to see if we looped over the
    // number previously
    numberMap.set(number, i);
  }

  return [-1, -1];
}

// [3, 2, 4], Target = 6

// Index  Processing, Difference, Stored Map
//    0      3           3        3, 0
//    1      2           4        2, 1
//    2      4           2        Found 2 in map (index 1)
//

// // Work through the array
// // Take the start number and the numbers after it and add them
// // if it equals the target number return

// for (let i = 0; i < nums.length; i++) {
//   const currentNum = nums[i];

//   for (let j = i + 1; j < nums.length; j++) {
//     if (currentNum + nums[j] === target) {
//       return [i, j];
//     }
//   }
// }

// return [-1, -1];
