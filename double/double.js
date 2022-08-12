const double = arr => {
  let douledOutput = [];
  for(const value of arr){
    douledOutput.push(value * 2);
  }
  return douledOutput;
}
console.log(double([1, 2, 3]));