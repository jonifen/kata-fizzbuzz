import { calculateFizzBuzz } from '../src/fizzbuzz.js';

describe("FizzBuzz", () => {
  // Arrange (for all)
  var testCases = [
    { iterations: 2, expected: [0, 1] },
    { iterations: 3, expected: [0, 1, 2] },
    { iterations: 4, expected: [0, 1, 2, "fizz"] },
    { iterations: 6, expected: [0, 1, 2, "fizz", 4, "buzz"] },
    { iterations: 16, expected: [0, 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizz buzz"] },
    { iterations: 100, expected: [0, 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizz buzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 29, 'fizz buzz', 31, 32, 'fizz', 34, 'buzz', 'fizz', 37, 38, 'fizz', 'buzz', 41, 'fizz', 43, 44, 'fizz buzz', 46, 47, 'fizz', 49, 'buzz', 'fizz', 52, 53, 'fizz', 'buzz', 56, 'fizz', 58, 59, 'fizz buzz', 61, 62, 'fizz', 64, 'buzz', 'fizz', 67, 68, 'fizz', 'buzz', 71, 'fizz', 73, 74, 'fizz buzz', 76, 77, 'fizz', 79, 'buzz', 'fizz', 82, 83, 'fizz', 'buzz', 86, 'fizz', 88, 89, 'fizz buzz', 91, 92, 'fizz', 94, 'buzz', 'fizz', 97, 98, 'fizz'] }
  ]

  testCases.forEach((testCase) => {
    it("should return [" + testCase.expected + "] when called with " + testCase.iterations + " iterations", () => {
      // Act
      const actual = calculateFizzBuzz(testCase.iterations);

      // Assert
      expect(testCase.expected).toStrictEqual(actual);
    });
  });
});