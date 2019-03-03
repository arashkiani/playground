export default (data = []) =>
  data.reduce(
    (accumulator, currentValue, array) => {
      const index = parseInt(currentValue.rate, 10) - 1;
      accumulator[index][1]++;
      return accumulator;
    },
    [["Rate 1", 0], ["Rate 2", 0], ["Rate 3", 0], ["Rate 4", 0], ["Rate 5", 0]]
  );
