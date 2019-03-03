import func from "./";

describe("countFeedbackByRating", () => {
  it("should count the number of feedback rates of same value", () => {
    const result = func([{ rate: "1" }, { rate: "1" }, { rate: "1" }]);
    const expected = [
      ["Rate 1", 3],
      ["Rate 2", 0],
      ["Rate 3", 0],
      ["Rate 4", 0],
      ["Rate 5", 0]
    ];
    expect(result).toEqual(expected);
  });
  it("should count the number of feedback rates of different value", () => {
    const result = func([
      { rate: "1" },
      { rate: "2" },
      { rate: "3" },
      { rate: "4" },
      { rate: "5" }
    ]);
    const expected = [
      ["Rate 1", 1],
      ["Rate 2", 1],
      ["Rate 3", 1],
      ["Rate 4", 1],
      ["Rate 5", 1]
    ];
    expect(result).toEqual(expected);
  });
});
