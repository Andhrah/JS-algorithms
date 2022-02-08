const bubbleSort1 = arr => {
   // loop over the arr starting from the first element
  for(x = 0, maxX = arr.length; x < maxX; x++){
    // loop over the arr while y is less than arr length
    for(y = 0, maxY = arr.length; y < maxY; y++){
      // check if the current element of the arr is greater the next element of the arr
      if(arr[y] > arr[y + 1]){
        // if the above is true swap the position of the two element with each other
        [arr[y], arr[y + 1]] = [arr[y + 1], arr[y]]
      }
    }
  }
  // return the array
  return arr;
}

// The second method below will prevent the loop from checking the last element against `undefined`

const bubbleSort = arr => {
  // loop over the arr starting from the last element
  for(x = arr.length; x > 0; x--){
    // loop over the arr while y is less than arr length - 1
    // the arr length - 1 will prevent the loop from checking the last element against `undefined`
    for(y = 0; y < x - 1; y++){
      // check if the current element of the arr is greater the next element of the arr
      if(arr[y] > arr[y + 1]){
        // if the above is true swap the position of the two element with each other
        [arr[y], arr[y + 1]] = [arr[y + 1], arr[y]]
      }
    }
  }
  // return the array
  return arr;
}

console.log(bubbleSort1([12, 56, 7, 8]));
console.log(bubbleSort([56, 12, 7, 8]));