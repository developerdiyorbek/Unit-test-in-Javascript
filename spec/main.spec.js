import { addNewItem, sum, users } from "../main.mjs";

describe("Main js", () => {
  it("should add two numbers", () => {
    expect(sum(10, 1)).toBe(11);
    expect(sum(10, 1)).toBeTruthy();
    expect(sum(10, 1)).toBeGreaterThan(10);
  });

  it("should add new item in users array", () => {
    const usersLength = users.length;
    addNewItem("Dilshodbek");
    expect(users).toContain("Dilshodbek");
    expect(users.length).toEqual(usersLength + 1);
  });
});
