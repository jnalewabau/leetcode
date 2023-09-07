import { expect } from "chai";
import { isPalindrome } from "..";

describe("Test Group", () => {
  it("test case - 121", () => {
    // ARRANGE
    // ACT
    const result = isPalindrome(121);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test

  it("test case - -121", () => {
    // ARRANGE
    // ACT
    const result = isPalindrome(-121);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case - 10", () => {
    // ARRANGE
    // ACT
    const result = isPalindrome(-121);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case - 8", () => {
    // ARRANGE
    // ACT
    const result = isPalindrome(8);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test
}); // end of describe
