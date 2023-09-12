import { expect } from "chai";
import { lengthOfLastWord } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const s = "Hello World";
    // ACT
    const result = lengthOfLastWord(s);
    // ASSERT
    expect(result).to.equal(5);
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const s = "   fly me   to   the moon  ";
    // ACT
    const result = lengthOfLastWord(s);
    // ASSERT
    expect(result).to.equal(4);
  }); // end of test
  it("test case 3", () => {
    // ARRANGE
    const s = "luffy is still joyboy";
    // ACT
    const result = lengthOfLastWord(s);
    // ASSERT
    expect(result).to.equal(6);
  }); // end of test
}); // end of describe
