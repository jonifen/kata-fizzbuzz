function calculateFizzBuzz(iterations) {
  let output = [];

  for (let iteration = 1; iteration <= iterations; iteration++) {
    output.push(calculateIteration(iteration));
  }

  return output;
}

function calculateIteration(value) {
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