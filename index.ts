export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // Add 0 to the beginning and end of the flowerbed provided to make calcs simpler
  const flowerBedToProcess = [0, ...flowerbed, 0];

  // console.log({ flowerBedToProcess });
  let newPlaces = 0;
  for (let i = 0; i < flowerBedToProcess.length; i++) {
    // console.log({ i });
    // Do we have 3 zeros in a row
    if (
      flowerBedToProcess[i] === 0 &&
      (flowerBedToProcess[i + 1] ?? 0) === 0 &&
      (flowerBedToProcess[i + 2] ?? 1) === 0
    ) {
      // console.log(`Can place a flower in index: ${i + 1}`);
      i = i + 1;

      newPlaces++;
    }
  }

  // console.log({ newPlaces });
  // console.log({ n });
  return n <= newPlaces;
}
// 1  2  3  4  5  6  7  8  9
// 0, 0, 0, 0, 0, 0, 0, 0, 0
//    1     1     1     1

// 3 = 1;

// 5 = 2;
// 7 = 3;
// 9 = 4;

// Iterate through the flower bed
// If you find three zeros in a row increment possible flower count
// Return true if the n asked for is less <= possible flower count

// NOTE: you could exist early if you meet n requirement
// let zeroCount = 0;
// let possibleFlowers = 0;

// for (const bed of flowerbed) {
//   if (bed === 1) {
//     // Work out the potential beds based on the zeroCount
//     if (zeroCount === 3) {
//       possibleFlowers += 1;
//     } else if (zeroCount > 3 && zeroCount % 2 === 1) {
//       possibleFlowers = Math.floor(zeroCount / 3) + 1;
//     }

//     zeroCount = 0;
//   } else {
//     zeroCount++;
//   }
// }

// if (zeroCount >= 3) {
//   if (zeroCount === 3) {
//     possibleFlowers += 1;
//   } else if (zeroCount > 3 && zeroCount % 2 === 1) {
//     possibleFlowers = Math.floor(zeroCount / 3) + 1;
//   }
// }

// return n <= possibleFlowers;
