import { expect } from "chai";
import { longestCommonPrefix } from "..";

// spell-checker:ignore strs
describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const strs = ["flower", "flow", "flight"];
    // ACT
    const result = longestCommonPrefix(strs);
    // ASSERT
    expect(result).to.equal("fl");
  }); // end of test
  it("test case 2", () => {
    // ARRANGE
    const strs = ["dog", "racecar", "car"];
    // ACT
    const result = longestCommonPrefix(strs);
    // ASSERT
    expect(result).to.equal("");
  }); // end of test
}); // end of describe
