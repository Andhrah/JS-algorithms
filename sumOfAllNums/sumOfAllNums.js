// Write a function called sumOfAllNums that calculates the sum of all numbers from 1 up to (and    including) some number n.

const sumOfAllNums = nums => {
  // accumulator
  let total = 0;
  // loop and add the numbers to the total accumulator
  for (let x = 1; x <= nums; x++) {
    total += x;
  }
  return total;
}

console.log(sumOfAllNums(50));
