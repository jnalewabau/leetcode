import { expect } from "chai";
import { summaryRanges } from "..";

describe("Test Group", () => {
  it("test case -empty", () => {
    // ARRANGE
    const nums: number[] = [];
    // ACT
    const result = summaryRanges(nums);
    // ASSERT
    expect(result).eql([]);
  }); // end of test

  it("test case - 1 entry", () => {
    // ARRANGE
    const nums = [123];
    // ACT
    const result = summaryRanges(nums);
    // ASSERT
    expect(result).eql(["123"]);
  }); // end of test

  it("test case 1", () => {
    // ARRANGE
    const nums = [0, 1, 2, 4, 5, 7];
    // ACT
    const result = summaryRanges(nums);
    // ASSERT
    expect(result).eql(["0->2", "4->5", "7"]);
  }); // end of test

  it("test case 1", () => {
    // ARRANGE
    const nums = [0, 2, 3, 4, 6, 8, 9];
    // ACT
    const result = summaryRanges(nums);
    // ASSERT
    expect(result).eql(["0", "2->4", "6", "8->9"]);
  }); // end of test
}); // end of describe
