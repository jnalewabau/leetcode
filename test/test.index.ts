import { expect } from "chai";
import { canPlaceFlowers } from "..";

describe("Test Group", () => {
  it("test case 1", () => {
    // ARRANGE
    const flowerbed = [1, 0, 0, 0, 1, 0, 0, 0];
    const n = 1;
    // ACT
    const result = canPlaceFlowers(flowerbed, n);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test

  it("test case 2", () => {
    // ARRANGE
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 2;
    // ACT
    const result = canPlaceFlowers(flowerbed, n);
    // ASSERT
    expect(result).to.be.false;
  }); // end of test

  it("test case 3", () => {
    // ARRANGE
    const flowerbed = [1, 0, 0, 0, 0, 0, 1];
    const n = 2;
    // ACT
    const result = canPlaceFlowers(flowerbed, n);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test

  it.only("test case 3", () => {
    // ARRANGE
    const flowerbed = [1, 0, 0, 0, 1, 0, 0];
    const n = 2;
    // ACT
    const result = canPlaceFlowers(flowerbed, n);
    // ASSERT
    expect(result).to.be.true;
  }); // end of test
}); // end of describe
