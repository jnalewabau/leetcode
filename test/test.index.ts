import { expect } from "chai";
import { isValid } from "..";

describe("Test Group", () => {
  it("test case - zero length string", () => {
    // ARRANGE
    const s = "";
    // ACT
    const result = isValid(s);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test

  it("test case - odd length string", () => {
    // ARRANGE
    const s = "(";
    // ACT
    const result = isValid(s);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case - odd length string", () => {
    // ARRANGE
    const s = "(){";
    // ACT
    const result = isValid(s);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case 1", () => {
    // ARRANGE
    const s = "()";
    // ACT
    const result = isValid(s);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const s = "()[]{}";
    // ACT
    const result = isValid(s);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const s = "(]";
    // ACT
    const result = isValid(s);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it.only("test case 3", () => {
    // ARRANGE
    const s = "{[]}";
    // ACT
    const result = isValid(s);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test
}); // end of describe
