import { expect } from "chai";
import { isPalindrome } from "..";

describe("Test Group", () => {
  it("test case 0", () => {
    // ARRANGE
    const s = "radar";

    // ACT
    const result = isPalindrome(s);
    // ASSERT

    expect(result).to.be.true;
  }); // end of test

  it("test case 1", () => {
    // ARRANGE
    const s = "A man, a plan, a canal: Panama";

    // ACT
    const result = isPalindrome(s);
    // ASSERT

    expect(result).to.be.true;
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const s = "race a car";

    // ACT
    const result = isPalindrome(s);
    // ASSERT

    expect(result).to.be.false;
  }); // end of test
  it("test case 3", () => {
    // ARRANGE
    const s = " ";

    // ACT
    const result = isPalindrome(s);
    // ASSERT

    expect(result).to.be.true;
  }); // end of test
}); // end of describe
