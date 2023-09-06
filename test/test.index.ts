import { expect } from "chai";
import { majorityElement } from "../index";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const nums = [3, 2, 3];

    // ACT
    const result = majorityElement(nums);

    // ASSERT
    expect(result).to.equal(3);
  });

  it("test case 2", () => {
    // ARRANGE
    const nums = [2, 2, 1, 1, 1, 2, 2];

    // ACT
    const result = majorityElement(nums);

    // ASSERT
    expect(result).to.equal(2);
  });

  it("test case 3", () => {
    // ARRANGE
    const nums = [6];

    // ACT
    const result = majorityElement(nums);

    // ASSERT
    expect(result).to.equal(6);
  });
});
