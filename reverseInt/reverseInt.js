const reverseInt = (num) => {
  // stringify `num`, convert it to an arry, reverse it and join the values as a single element.
  let reversed = String(num).split('').reverse().join('');

  // check if the num is negative integer
  return num < 0 ? `-${parseInt(reversed)}` : Number(reversed)
}

console.log(reverseInt(-90));
reverseInt(-90);