const countUniqueValues = arr => {
  const sorted = arr.sort((a,b) => a - b);
  return new Set(sorted).size;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));