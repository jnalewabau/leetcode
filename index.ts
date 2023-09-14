export function isHappy(n: number): boolean {
  // Keep a track of the squared totals
  const calculatedNumbers = new Set<number>();

  while (true) {
    const calculation = squaredTotal(n);

    // console.log({ calculation });

    if (calculation === 1) {
      return true;
    }

    if (calculatedNumbers.has(calculation)) {
      // console.log(`Seen ${calculation}`);
      return false;
    }

    calculatedNumbers.add(calculation);
    // console.log({ calculatedNumbers });

    n = calculation;
  }
}

function squaredTotal(n: number): number {
  // Convert the number to a string
  const numberString = n.toString();
  const digits = numberString.split("");

  const squaredNums = digits.map(
    (digit) => Number.parseInt(digit) * Number.parseInt(digit)
  );

  // console.log({ digits });
  // console.log({ squaredNums });

  // Add the squared numbers together
  const squaredTotal = squaredNums.reduce(
    (prev, currentValue) => prev + currentValue
  );

  // console.log({ squaredTotal });

  return squaredTotal;
}
