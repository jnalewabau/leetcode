import { expect } from "chai";
import { canConstruct } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const ransomNote = "a",
      magazine = "b";
    // ACT
    const result = canConstruct(ransomNote, magazine);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const ransomNote = "aa",
      magazine = "ab";
    // ACT
    const result = canConstruct(ransomNote, magazine);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case 3", () => {
    // ARRANGE
    const ransomNote = "aa",
      magazine = "aab";
    // ACT
    const result = canConstruct(ransomNote, magazine);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test
}); // end of describe
