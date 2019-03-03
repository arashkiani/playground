import func from "./";

describe("saveObjectIntoArray", () => {
  it("Should replace current value with another", () => {
    const result = func(
      [{ email: "a@b.com", rate: 1 }, { email: "b@b.com", rate: 1 }],
      1,
      {
        email: "b@b.com",
        rate: 3
      }
    );
    expect(result).toEqual([
      { email: "a@b.com", rate: 1 },
      { email: "b@b.com", rate: 3 }
    ]);
  });
  it("Should Add new value if index is -1", () => {
    const result = func(
      [{ email: "a@b.com", rate: 1 }, { email: "b@b.com", rate: 1 }],
      -1,
      {
        email: "c@b.com",
        rate: 4
      }
    );
    expect(result).toEqual([
      { email: "a@b.com", rate: 1 },
      { email: "b@b.com", rate: 1 },
      { email: "c@b.com", rate: 4 }
    ]);
  });
});
