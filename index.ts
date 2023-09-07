export function isPalindrome(x: number): boolean {
  const numberString = x.toString();

  for (let i = 0; i < numberString.length / 2; i++) {
    console.log(
      `comparing ${numberString[i]} vs ${
        numberString[numberString.length - i - 1]
      }`
    );

    if (numberString[i] !== numberString[numberString.length - i - 1]) {
      return false;
    }
  }

  return true;
}

// const numberString = x.toString();
// const reversedString = numberString.split("").reverse().join("");

// // console.log({ numberString });
// // console.log({ reversedString });

// return numberString === reversedString;

// 88
// 01

// 121
// 012
