import { assert, expect, should } from "chai";
import { isAnagram } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const s = "anagram";
    const t = "nagaram";

    // ACT
    const result = isAnagram(s, t);
    // ASSERT
    expect(result).to.be.true;
    assert(result === true);
    // result.should.be.true;
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const s = "rat";
    const t = "car";

    // ACT
    const result = isAnagram(s, t);
    // ASSERT
    expect(result).to.be.false;
    assert(result === false);
    // result.should.be.true;
  }); // end of test
}); // end of describe
