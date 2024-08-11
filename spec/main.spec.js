import { sum } from "../main.mjs";

describe("Main js", () => {
  it("should add two numbers", () => {
    expect(sum(10, 1)).toBe(11);
  });
});
