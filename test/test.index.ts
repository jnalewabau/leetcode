import { expect } from "chai";
import { merge } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    // ACT
    merge(nums1, m, nums2, n);

    // ASSERT
    expect(nums1.length).to.equal(6);
    expect(nums1).eql([1, 2, 2, 3, 5, 6]);
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;

    // ACT
    merge(nums1, m, nums2, n);

    // ASSERT
    expect(nums1.length).to.equal(1);
    expect(nums1).eql([1]);
  }); // end of test
}); // end of describe
