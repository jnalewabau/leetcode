import { expect } from "chai";
import { containsDuplicate } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const nums = [1, 2, 3, 1];
    // ACT
    const result = containsDuplicate(nums);

    // ASSERT
    expect(result).to.be.true;
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const nums = [1, 2, 3, 4];
    // ACT
    const result = containsDuplicate(nums);

    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case 3", () => {
    // ARRANGE
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    // ACT
    const result = containsDuplicate(nums);

    // ASSERT
    expect(result).to.be.true;
  }); // end of test
}); // end of describe
