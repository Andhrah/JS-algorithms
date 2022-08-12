const sumZero = arr => {
  // sort array of integer
  const sortNumerically = (a, b) => a-b;
  let sorted = arr.sort(sortNumerically);
  console.log(`I am now sorted ${sorted}`);
  // declare a variable for storing previous element
  let prevElement = 0;
  // declare array to store both element that sum to zero
  let sumValues = [];
  if(sumValues.length === 0) {
    for(const value of sorted){
      if(prevElement === 0){
        prevElement = value;
      }
      else{
        console.log(`Gain insight ${prevElement}, ${value} ${prevElement + value}`)
        if(prevElement + value == 0){
          return sumValues = [prevElement, value];
        }
      }
    }
    let nextNumber = arr.length - 1;
    if(nextNumber > 0){
      nextNumber -= 1;
      console.log('####################################');
      return sumZero(sorted.slice(1));
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 3, 2, 1]))
console.log(sumZero([-6, -7, -8, -3, -5, -4, 2, 6]))