import { expect } from "chai";
import { wordPattern } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const pattern = "abba",
      s = "dog cat cat dog";

    // ACT
    const result = wordPattern(pattern, s);

    // ASSERT
    expect(result).to.be.true;
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const pattern = "abba",
      s = "dog cat cat fish";

    // ACT
    const result = wordPattern(pattern, s);

    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const pattern = "aaaa",
      s = "dog cat cat dog";

    // ACT
    const result = wordPattern(pattern, s);

    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case 3", () => {
    // ARRANGE
    const pattern = "abba",
      s = "dog dog dog dog";

    // ACT
    const result = wordPattern(pattern, s);

    // ASSERT
    expect(result).to.be.false;
  }); // end of test
}); // end of describe
