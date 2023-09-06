// spell-checker:ignore nums
import { expect } from "chai";
import { removeElement } from "../index";

describe("Remove Element Group", () => {
  it("test case 1", () => {
    //ARRANGE
    const nums = [3, 2, 2, 3];
    const val = 3;

    // ACT
    const result = removeElement(nums, val);

    // ASSERT
    expect(result).eql(2);

    const expectedValues = [2, 2];
    const returnedArray = nums.slice(0, result);
    expect(returnedArray).to.eql(expectedValues);

    // for (let i = 0; i < expectedValues.length; i++) {
    //   expect(nums[i]).to.equal(expectedValues[i]);
    // }
  });

  it("test case 2", () => {
    //ARRANGE
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;

    // ACT
    const result = removeElement(nums, val);

    // ASSERT
    expect(result).eql(5);

    const expectedValues = [0, 1, 3, 0, 4];
    const returnedArray = nums.slice(0, result);
    expect(returnedArray).to.eql(expectedValues);
    // for (let i = 0; i < expectedValues.length; i++) {
    //   expect(nums[i]).to.equal(expectedValues[i]);
    // }
  });

  it("test case 3", () => {
    //ARRANGE
    const nums: number[] = [];
    const val = 2;

    // ACT
    const result = removeElement(nums, val);

    // ASSERT
    expect(result).eql(0);
    expect(nums.length).to.equal(0);
  });
});
