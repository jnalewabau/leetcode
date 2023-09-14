import { expect } from "chai";
import { isIsomorphic } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const s = "egg",
      t = "add";
    // ACT
    const result = isIsomorphic(s, t);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test
  it("test case 2", () => {
    // ARRANGE
    const s = "foo",
      t = "bar";
    // ACT
    const result = isIsomorphic(s, t);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test
  it("test case 3", () => {
    // ARRANGE
    const s = "title",
      t = "paper";
    // ACT
    const result = isIsomorphic(s, t);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test

  it("test case 4", () => {
    // ARRANGE
    const s = "badc",
      t = "baba";
    // ACT
    const result = isIsomorphic(s, t);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test
}); // end of describe
