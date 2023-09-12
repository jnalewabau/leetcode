import { expect } from "chai";
import { isSubsequence } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const s = "abc";
    const t = "ahbgdc";

    // ACT
    const result = isSubsequence(s, t);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test
  it("test case 2", () => {
    // ARRANGE
    const s = "axc";
    const t = "ahbgdc";

    // ACT
    const result = isSubsequence(s, t);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case 3", () => {
    // ARRANGE
    const s = "axc";
    const t = "axc";

    // ACT
    const result = isSubsequence(s, t);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test
}); // end of describe
