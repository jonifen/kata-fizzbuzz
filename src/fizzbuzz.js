function calculateFizzBuzz(iterations) {
  // future reminder: Array(x) creates an empty array of x length.
  // not to be confused with Array('x') which would create an array with 1 item set to 'x'.
  return Array.apply(null, Array(iterations))
    .map((value, index) => {
      return calculateIteration(index);
    });
}

function calculateIteration(value) {
  if (value == 0)
    return value;

  if (value % 3 == 0 && value % 5 == 0)
    return "fizz buzz";

  if (value % 3 == 0)
    return "fizz";

  if (value % 5 == 0)
    return "buzz";

  return value;
}

export {
  calculateFizzBuzz
};