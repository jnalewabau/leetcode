import { expect } from "chai";
import { isHappy } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const n = 19;
    // ACT
    const result = isHappy(n);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const n = 2;
    // ACT
    const result = isHappy(n);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test
}); // end of describe
