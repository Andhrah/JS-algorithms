const reverseInt = (num) => {
  // stringify `num`, convert it to an arry, reverse it and join the values as a single element.
  let reversed = String(num).split('').reverse().join('');

  // check if the num is negative integer
  return parseInt(reversed) * Math.sign(num)
}

console.log(reverseInt(-92));
reverseInt(-92);