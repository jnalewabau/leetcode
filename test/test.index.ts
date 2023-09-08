// spell-checker:ignore nums
import { expect } from "chai";
import { twoSum } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const nums = [2, 7, 11, 15];
    const target = 9;

    // ACT
    const result = twoSum(nums, target);
    // ASSERT
    expect(result).eql([0, 1]);
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const nums = [3, 2, 4];
    const target = 6;

    // ACT
    const result = twoSum(nums, target);
    // ASSERT
    expect(result).eql([1, 2]);
  }); // end of test

  it("test case 3", () => {
    // ARRANGE
    const nums = [3, 3];
    const target = 6;

    // ACT
    const result = twoSum(nums, target);
    // ASSERT
    expect(result).eql([0, 1]);
  }); // end of test
}); // end of describe
