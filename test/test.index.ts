// spell-checker:ignore nums
import { expect } from "chai";
import { removeDuplicates } from "../index";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const nums = [1, 1, 2];

    // ACT
    const result = removeDuplicates(nums);

    // ASSERT
    expect(result).to.equal(2);
    const expectedMembers = nums.splice(0, 2);
    expect(expectedMembers).to.have.members([1, 2]);
  });

  it("test case 2", () => {
    // ARRANGE
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    // ACT
    const result = removeDuplicates(nums);

    // ASSERT
    const expectedNum = 5;
    expect(result).to.equal(expectedNum);
    const expectedMembers = nums.splice(0, expectedNum);
    expect(expectedMembers).to.have.members([0, 1, 2, 3, 4]);
  });

  it("test case 3", () => {
    // ARRANGE
    const nums: number[] = [];

    // ACT
    const result = removeDuplicates(nums);

    // ASSERT
    const expectedNum = 0;
    expect(result).to.equal(expectedNum);
    const expectedMembers = nums.splice(0, expectedNum);
    expect(expectedMembers).to.have.members([]);
  });
});
