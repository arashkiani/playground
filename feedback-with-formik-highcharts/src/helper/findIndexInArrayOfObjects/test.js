import func from "./";

describe("findIndexInArrayOfObjects", () => {
  it("Should find the index from the array", () => {
    const result = func(
      [{ email: "a@b.com" }, { email: "b@b.com" }],
      "email",
      "b@b.com"
    );
    expect(result).toEqual(1);
  });
  it("Should return -1 if array is empty", () => {
    const result = func([], "email", "a@b.com");
    expect(result).toEqual(-1);
  });
  it("Should return -1 if not exist in array", () => {
    const result = func(
      [{ email: "a@a.com" }, { email: "a@b.com" }],
      "email",
      "c@b.com"
    );
    expect(result).toEqual(-1);
  });
});
