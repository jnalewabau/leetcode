import { expect } from "chai";
import { strStr } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const haystack = "sadbutsad";
    const needle = "sad";

    // ACT
    const result = strStr(haystack, needle);
    // ASSERT
    expect(result).to.equal(0);
  }); // end of test

  it("test case 1", () => {
    // ARRANGE
    const haystack = "leetcode";
    const needle = "leeto";

    // ACT
    const result = strStr(haystack, needle);
    // ASSERT
    expect(result).to.equal(-1);
  }); // end of test
}); // end of describe
